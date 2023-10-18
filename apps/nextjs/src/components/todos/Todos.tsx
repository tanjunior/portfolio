import { api } from "~/utils/server";
import TodoList from "./TodoList";

export default async function Todos() {
  const todos = await api.todo.all.query();

  return (
    <section className="mx-auto max-w-3xl p-5 sm:pt-4 md:p-0">
      <div className="mb-4 bg-accent py-4 text-accent-foreground">
        <h1 className="text-center text-2xl font-semibold">Todos</h1>
        <div className="mt-2 text-center">
          <span>using </span>
          <a href="https://github.com/trpc/trpc" className="underline">
            TRPC
          </a>
          <span>, </span>
          <a
            href="https://github.com/drizzle-team/drizzle-orm"
            className="underline"
          >
            Drizzle
          </a>
        </div>
      </div>
      <TodoList todos={todos} />
    </section>
  );
}
