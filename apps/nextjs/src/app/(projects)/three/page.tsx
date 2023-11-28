"use client";

import React, { Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Environment, Loader, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Scene from "~/components/projects/Scene";
import Section from "~/components/projects/Section";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <div className="m-0 h-screen w-screen p-0">
      <Canvas>
        {/* <color attach="background" args={["#e6e7ff"]} /> */}
        {/* <ambientLight intensity={0.03} /> */}
        {/* <fog attach="fog" args={['#ff5020', 5, 18]} /> */}
        {/* <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow /> */}
        {/* <Sky distance={500} sunPosition={[2, 0.4, 10]} /> */}
        {/* <color attach="background" args={["#f0f0f0"]} /> */}
        {/* <fog attach="fog" args={["#f0f0f0", 8, 20]} /> */}
        <ambientLight intensity={0.5} />
        {/* <directionalLight
          intensity={2}
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        /> */}

        {/* <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} /> */}
        <Environment preset="sunset" />
        <ScrollControls pages={6}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Scroll html>
            <Section>
              <div className="rounded-3xl bg-[#ebe8e5] p-2 opacity-80">
                <h1 className="text-7xl text-[#595b3c]">
                  The Heart of Bukit Timah
                </h1>
              </div>
            </Section>
            <Section>
              <div className="rounded-3xl bg-[#ebe8e5] p-2 opacity-80">
                <h2 className="text-3xl">
                  Immerse in a vibrant lifestyle at nature’s doorstep.
                </h2>
              </div>
            </Section>
            <Section>
              <div className="max-w-[50vw] rounded-3xl bg-[#ebe8e5] p-2 opacity-90">
                <p className="text-[#595b3c]">
                  The Reserve Residences is a thoughtfully curated integrated
                  development with transport hub that features a blend of 1- to
                  5-bedroom luxury residences, serviced residences, retail and
                  public spaces. Situated in the Beauty World neighbourhood, the
                  development is seamlessly connected to transport networks and
                  nature attractions.{" "}
                </p>
              </div>
            </Section>
            <Section>
              <div className="flex flex-row gap-16 rounded-3xl bg-[#ebe8e5] p-2 opacity-70">
                <div className="">
                  <sub>DEVELOPMENT</sub>
                  <h3>The Reserve Residences</h3>
                  <sub>SITE AREA</sub>
                  <h3>346,439 sq ft</h3>
                  <sub>DISTRICT</sub>
                  <h3>21</h3>
                  <sub>ADDRESS</sub>
                  <h3>9 Jalan Anak Bukit, Singapore 589603</h3>
                </div>
                <div>
                  <sub>TENURE</sub>
                  <h3>99 Years</h3>
                  <sub>NO. OF UNITS</sub>
                  <h3>732</h3>
                  <sub>T.O.P</sub>
                  <h3>Estimated Q1 2028</h3>
                </div>
              </div>
            </Section>

            <Section>
              <p>
                Visit our Sales Gallery at 100A Upper Bukit Timah Road S589680,
                9am to 6pm daily. Please call +65 6534 8000 or WhatsApp +65 9712
                2344 for more information. Follow this page or our social
                channels to learn more about us.
              </p>
            </Section>

            <Section>
              <div className="rounded-3xl bg-slate-500 p-2">
                <Form {...form}>
                  <form className="space-y-8">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input />
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
                            <Input />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
            </Section>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader />
    </div>
  );
}
