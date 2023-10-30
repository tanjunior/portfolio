"use client";

import type { SelectTodo } from "@acme/db/schema/todo";

import { api } from "~/utils/client";
import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

export default function TodoList({ todos }: { todos: SelectTodo[] }) {
  const { data } = api.todo.all.useQuery(undefined, {
    initialData: todos,
  });

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul>
      <TodoModal />
      {data.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      <TodoModal />
    </ul>
  );
}
const EmptyState = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No todos</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new todo.
      </p>
      <div className="mt-6">
        <TodoModal emptyState={true} />
      </div>
    </div>
  );
};
