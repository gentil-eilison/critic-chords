"use client";

import { createReview, CreateReviewData } from "@/api/reviews";
import PrimaryButton from "@/components/PrimaryButton";
import Rating from "@/components/Rating";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAlbum } from "@/context/AlbumContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@auth0/nextjs-auth0";
import z from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  rating: z.number().min(0).max(5),
  commentary: z
    .string()
    .max(255, {
      error: "Commentary must be 255 characters max",
    })
    .optional(),
});

interface ReviewFormProps {
  setHasRated: Dispatch<SetStateAction<boolean>>;
}

export default function ReviewForm({ setHasRated }: ReviewFormProps) {
  const { album } = useAlbum();
  const [rating, setRating] = useState<number>(0);
  const { user } = useUser();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({
      albumId,
      reviewData,
    }: {
      albumId: number;
      reviewData: CreateReviewData;
    }) => createReview(albumId, reviewData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewsList"] });
      setHasRated(true);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      commentary: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    if (user && user.email) {
      const creationData = {
        rating: rating,
        commentary: data.commentary || "",
        user: user.email,
      };

      mutation.mutate({
        albumId: album.id,
        reviewData: creationData,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div>
          <p className="text-gray-400">Your Rating</p>
          <div className="flex items-center gap-2">
            <Rating rating={rating} setRating={setRating} />
            {rating > 0 && (
              <span className="text-green-500 font-bold text-xl">
                {rating}/5
              </span>
            )}
          </div>
        </div>
        <FormField
          control={form.control}
          name="commentary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  aria-label="Commentary"
                  placeholder="Share your thoughts about this album..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PrimaryButton
          extraClasses="sm:w-full md:w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={rating === 0}
        >
          Submit Review
        </PrimaryButton>
      </form>
    </Form>
  );
}
