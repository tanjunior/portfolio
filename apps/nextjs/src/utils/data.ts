import React from "react";
import appImg from "$/app.png";
import chatImg from "$/chat.png";
import todoImg from "$/todo.png";

import { Icons } from "~/components/icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma",
    location: "Singapore",
    description: " Diploma in Information Technology",
    icon: React.createElement(Icons.graduationCap),
    date: "2014",
  },
  {
    title: "Operations Specialist",
    location: "Singapore",
    description:
      "I worked as an Operations Specialist at NCS Pte Ltd for 7 years to save up for my degree.",
    icon: React.createElement(Icons.briefcase),
    date: "2015",
  },
  {
    title: "Bachelor's Degree",
    location: "Singapore",
    description:
      "Bachelor of Information Technology in Games Software Design and Production and Mobile and Web Application Development",
    icon: React.createElement(Icons.graduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Todo",
    description: "Todo App with type-safe API.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "MySQL",
      "Tailwind",
      "Dizzle",
      "TRPC",
    ],
    imageUrl: todoImg,
    path: "/todo",
  },
  {
    title: "Chat",
    description: "Real-time chat app using golang websocket server.",
    tags: ["TypeScript", "React", "Tailwind", "WebSocket", "Golang"],
    imageUrl: chatImg,
    path: "/chat",
  },
  {
    title: "Social Media App",
    description: "A social media app with feeds and chat.",
    tags: [
      "TypeScript",
      "React Native",
      "expo",
      "MySQL",
      "Tailwind",
      "Clerk",
      "getstream",
      "uploadthing",
    ],
    imageUrl: appImg,
    path: "https://expo.dev/%40juniortan/expo?serviceType=eas&distribution=expo-go&scheme=&channel=main&sdkVersion=49.0.0",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Golang",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Dizzle",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
