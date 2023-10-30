"use client";

import type { FormEvent } from "react";
import React from "react";
import { useToast } from "@/ui/use-toast";
import { motion } from "framer-motion";

import { useSectionInView } from "~/hooks";
import { validateString } from "~/utils";
import { api } from "~/utils/client";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { toast } = useToast();
  const { ref } = useSectionInView("Contact");
  const { mutate } = api.email.contact.useMutation();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
      return {
        error: "Invalid sender email",
      };
    }
    if (!validateString(message, 5000)) {
      return {
        error: "Invalid message",
      };
    }

    mutate(
      { message: message, senderEmail: senderEmail },
      {
        onError: (error) =>
          toast({
            variant: "destructive",
            title: "Error",
            description: error.message,
          }),
        onSuccess: () =>
          toast({
            title: "Success",
            description: "Message sent",
          }),
        onSettled: () =>
          toast({
            title: "Settled",
            description: "Message sent",
          }),
      },
    );
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:contact@tanjingren.me">
          contact@tanjingren.me
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleFormSubmit}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52  rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={false} />
      </form>
    </motion.section>
  );
}
