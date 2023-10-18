"use client";

import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { useToast } from "@/ui/use-toast";
import { useForm } from "react-hook-form";

import type { InsertTodo, NewTodoParams, Todo } from "@acme/db/schema/todo";

import { api } from "~/utils/client";
import { Button } from "../ui/button";

const TodoForm = ({
  todo,
  closeModal,
}: {
  todo?: Todo;
  closeModal: () => void;
}) => {
  const { toast } = useToast();

  const router = useRouter();
  const utils = api.useContext();

  const form = useForm<InsertTodo>({
    defaultValues: todo ?? {
      text: "",
    },
  });

  const onSuccess = async () => {
    await utils.todo.all.invalidate();
    router.refresh();
    closeModal();
    toast({
      title: "Success",
      variant: "default",
    });
  };

  const { mutate: createTodo, isLoading: isCreating } =
    api.todo.create.useMutation({
      onSuccess: () => onSuccess(),
    });

  const handleSubmit = (values: NewTodoParams) => {
    createTodo(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={"space-y-8"}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mr-1" disabled={isCreating}>
          Add
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
