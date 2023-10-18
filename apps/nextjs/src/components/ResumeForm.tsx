"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
// import { useToast } from "@/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { Resume } from "@acme/email";
import { resumeSchema } from "@acme/email";

// import { api } from "~/utils/client";

export default function ResumeForm() {
  // const { toast } = useToast();
  // const { mutate } = api.email.sendResume.useMutation();

  // 1. Define your form.
  const form = useForm<Resume>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver<any>(resumeSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  // function onSubmit(values: Resume) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   mutate(values, {
  //     onSuccess: () => {
  //       form.reset();
  //       toast({
  //         variant: "default",
  //         title: "Success",
  //         description: `Resume has been sent to ${values.email}`,
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         variant: "destructive",
  //         title: "Error",
  //         description: error.message,
  //       });
  //     },
  //   });
  // }

  return (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle>Send me an email</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      {...field}
                    />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <p className="border p-3 text-center">
          Form built using{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form"
            className="underline"
          >
            react-hook-form
          </a>
          {" and "}
          <a href="https://resend.com/" className="underline">
            Resend
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
