"use client";

import PrimaryButton from "@/components/PrimaryButton";
import Rating from "@/components/Rating";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  rating: z.number().min(0).max(5),
  commentary: z.string().max(255, {
    error: "Commentary must be 255 characters max",
  }),
});

export default function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [commentary, setCommentary] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      commentary: "",
    },
  });

  function handleSubmit(data: any) {}

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
              <Textarea
                onChange={(event) => setCommentary(event.currentTarget.value)}
                aria-label="Commentary"
                placeholder="Share your thoughts about this album..."
              />
            </FormItem>
          )}
        />
        <PrimaryButton
          extraClasses="sm:w-full md:w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={rating === 0 || commentary === ""}
        >
          Submit Review
        </PrimaryButton>
      </form>
    </Form>
  );
}
