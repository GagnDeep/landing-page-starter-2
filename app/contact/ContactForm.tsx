"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  content: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    dateLabel: string;
    guestsLabel: string;
    messageLabel: string;
    submitButton: string;
    validation: {
      nameMin: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageMin: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      guests: string;
      message: string;
    };
    successMessage: string;
  };
}

export function ContactForm({ content }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, { message: content.validation.nameMin }),
    email: z.string().email({ message: content.validation.emailInvalid }),
    phone: z.string().min(10, { message: content.validation.phoneInvalid }),
    date: z.string().optional(),
    guests: z.string().optional(),
    message: z.string().min(10, { message: content.validation.messageMin }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccess(true);
    form.reset();
  }

  if (isSuccess) {
    return (
      <div className="p-8 bg-primary/10 border border-primary/20 rounded-xl text-center space-y-4">
        <h3 className="text-2xl font-heading font-semibold text-primary">Thank You</h3>
        <p className="text-muted-foreground">{content.successMessage}</p>
        <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{content.nameLabel} *</FormLabel>
                <FormControl>
                  <Input placeholder={content.placeholders.name} className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{content.emailLabel} *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={content.placeholders.email} className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{content.phoneLabel} *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={content.placeholders.phone} className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{content.dateLabel}</FormLabel>
                <FormControl>
                  <Input type="date" className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">{content.guestsLabel}</FormLabel>
              <FormControl>
                <Input type="number" placeholder={content.placeholders.guests} className="bg-background" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">{content.messageLabel} *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={content.placeholders.message}
                  className="min-h-[150px] resize-y bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-glow">
          {content.submitButton}
        </Button>
      </form>
    </Form>
  );
}
