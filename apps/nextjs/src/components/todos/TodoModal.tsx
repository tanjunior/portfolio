"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

import type { Todo } from "@acme/db/schema/todo";

import TodoForm from "./TodoForm";

export default function TodoModal({
  todo,
  emptyState,
}: {
  todo?: Todo;
  emptyState?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const editing = !!todo?.id;
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        {emptyState ? (
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            New Todo
          </Button>
        ) : (
          <Button variant={"outline"} className="h-14 w-full rounded-md">
            New Todo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="px-5 pt-5">
          <DialogTitle>{editing ? "Edit" : "Create"} Todo</DialogTitle>
        </DialogHeader>
        <div className="px-5 pb-5">
          <TodoForm closeModal={closeModal} todo={todo} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
