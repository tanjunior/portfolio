import Chat from "@/chat/Chat";
import Todos from "@/todos/Todos";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

// export const dynamic = "force-dynamic";
// export const runtime = "edge";

export default function HomePage() {
  return (
    <Tabs
      defaultValue="todo"
      className="mx-auto mt-6 flex w-full flex-col items-center gap-4"
    >
      <TabsList>
        <TabsTrigger value="todo">Todo</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="todo" className="w-full">
        <Todos />
      </TabsContent>
      <TabsContent value="chat" className="w-full">
        <Chat />
      </TabsContent>
    </Tabs>
  );
}
