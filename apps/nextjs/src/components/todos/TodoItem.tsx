import type { SelectTodo } from "@acme/db/schema/todo";

import { api } from "~/utils/client";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

export default function TodoItem({ todo }: { todo: SelectTodo }) {
  const utils = api.useContext();
  const { mutate: updateItem } = api.todo.update.useMutation({
    onSuccess: async () => {
      await utils.todo.all.invalidate();
    },
  });
  const { mutate: deleteItem } = api.todo.delete.useMutation({
    onSuccess: async () => {
      await utils.todo.all.invalidate();
    },
  });

  return (
    <li className="my-2 flex justify-between">
      <Switch
        checked={todo.done}
        onCheckedChange={(e) => {
          updateItem({ ...todo, done: e });
        }}
      />
      {todo.text}
      <Button
        onClick={() => {
          deleteItem(todo.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
}
