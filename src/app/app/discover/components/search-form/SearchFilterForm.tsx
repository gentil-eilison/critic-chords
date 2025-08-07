"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Filter, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import SearchFilterSelect from "./SearchFilterSelect";
import PrimaryButton from "@/components/PrimaryButton";
import criticChordClient from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "@/api/genres";
import { Dispatch, SetStateAction } from "react";
import { Album } from "@/types/Application";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
  releaseYear: z
    .string()
    .refine(
      (val) =>
        val === undefined ||
        val === "" ||
        (!isNaN(Number(val)) && Number(val) <= 2025),
      {
        error: "Release year must be less than or equal to 2025",
      }
    ),
  genre: z.string(),
  searchBy: z.string(),
});

const searchBySelectData = {
  placeholder: "Search by",
  options: [
    {
      value: "0",
      text: "All",
    },
    {
      value: "1",
      text: "Artist",
    },
    {
      value: "2",
      text: "Album",
    },
  ],
};

interface SearchFilterFormProps {
  setAlbums: Dispatch<SetStateAction<Album[]>>;
}

export default function SearchFilterForm({ setAlbums }: SearchFilterFormProps) {
  const { isSuccess, data } = useQuery({
    queryKey: ["genresList"],
    queryFn: getGenres,
  });

  let genresOptions: { value: any; text: string }[] = [];
  if (isSuccess) {
    genresOptions = data.map((genre) => ({
      value: String(genre.id),
      text: genre.name,
    }));
  }
  const genresSelectData = {
    placeholder: "Genre",
    options: [
      {
        value: " ",
        text: "All genres",
      },
      ...genresOptions,
    ],
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      releaseYear: "",
      genre: "",
      searchBy: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    let genre = data.genre;
    if (genre === " ") {
      genre = "";
    }

    const queryParams = new URLSearchParams({
      name: data.name,
      genre: genre,
      search_by: data.searchBy,
      release_year: String(data.releaseYear),
    });

    const response = await criticChordClient.get(
      `/albums/?${queryParams.toString()}`
    );
    if (response.status === 200) {
      setAlbums(response.data);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <Search className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <FormControl>
                <Input
                  aria-label="Name"
                  placeholder="Search for albums or artists..."
                  className="pl-10"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex gap-2 text-gray-400">
            <Filter /> Filters:
          </div>
          <FormField
            control={form.control}
            name="searchBy"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SearchFilterSelect
                    options={searchBySelectData.options}
                    placeholder={searchBySelectData.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="releaseYear"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="sm:w-full md:grow-1"
                    aria-label="Release Year"
                    placeholder="2025"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SearchFilterSelect
                    options={genresSelectData.options}
                    placeholder={genresSelectData.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <PrimaryButton
            extraClasses="sm:grow-1 md:grow-0 md:w-40"
            type="submit"
          >
            Filter
          </PrimaryButton>
        </div>
      </form>
    </Form>
  );
}
