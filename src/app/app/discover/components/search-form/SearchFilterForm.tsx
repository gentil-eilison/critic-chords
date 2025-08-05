"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Filter, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import SearchFilterSelect from "./SearchFilterSelect";
import PrimaryButton from "@/components/PrimaryButton";

const formSchema = z.object({
    name: z.string(),
    releaseYear: z.number({ error: "Value must be a number" }).lte(2025, { 
        error: "Release year must not be greater than 2025" 
    }),
    genre: z.string(),
    searchBy: z.string()
});

const searchBySelectData = {
    placeholder: "Search by",
    options: [
        {
            value: "all",
            text: "All"
        },
        {
            value: "albums",
            text: "Albums"
        },
        {
            value: "artists",
            text: "Artists"
        }
    ]
}

const genresSelectData = {
    placeholder: "Genre",
    options: [
        {
            value: "all",
            text: "All genres"
        },
        {
            text: "Rock",
            value: "rock"
        },
        {
            text: "Pop",
            value: "pop"
        },
        {
            text: "Electronic",
            value: "electronic"
        },
        {
            text: "Hip Hop",
            value: "hip-hop"
        },
        {
            text: "Folk",
            value: "folk"
        },
        {
            text: "Jazz",
            value: "jazz"
        }
    ]
}

export default function SearchFilterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            releaseYear: 2025,
            genre: "Genre",
            searchBy: "Search by"
        }
    });

    function handleSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <Search 
                                className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                            />
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
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <PrimaryButton extraClasses="sm:grow-1 md:grow-0 md:w-40" type="submit">Filter</PrimaryButton>
                </div>
            </form>
        </Form>
    );
}