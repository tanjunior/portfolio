import React from "react";

interface Milestone {
  year: string;
  tagline?: string;
  heading: string;
  text?: string;
}

const data: Milestone[] = [
  {
    year: "1990",
    tagline: "Born into this world",
    heading: "My Name is Tan Jing Ren",
  },
  {
    year: "1997",
    heading: "Woodgrove Primary",
    tagline: "Primary School",
  },
  {
    year: "2003",
    heading: "Woodgrove Secondary",
    tagline: "Secondary School",
  },
  {
    year: "2009",
    heading: "Singapore Police Force",
    tagline: "Time to serve",
  },
  {
    year: "2012",
    heading: "Blitz Technologies",
    tagline: "My first job",
    text: "WIP",
  },
  {
    year: "2012",
    heading: "Fssocom IT Mart",
    tagline: "",
    text: "WIP",
  },
  {
    year: "2013",
    heading: "Kaplan",
    tagline: "Diploma",
  },
  {
    year: "2014",
    heading: "VMware Singapore",
    text: "WIP",
  },
  {
    year: "2015",
    heading: "NCS",
    text: "WIP",
  },
  {
    year: "2021",
    heading: "Murdoch",
    tagline: "Blessing in disguise",
    text: "During the covid pandemic I noticed that classes have been converted to online and realised that it is a good opportunity to attain my degree while still working.",
  },
  {
    year: "2022",
    heading: "ITCS",
    tagline: "",
    text: "WIP",
  },
  {
    year: "2023",
    heading: "Graduated",
    tagline: "",
    text: "WIP",
  },
];

export default function Timeline() {
  return (
    <section className="mx-auto flex max-w-[80vw] flex-col flex-nowrap items-center p-0 2xl:max-w-[50vw]">
      <h1 className="py-10 text-7xl">Timeline</h1>
      {data.map((milestone, i) => {
        const item = { ...milestone };
        return <Row key={i} {...item} />;
      })}
    </section>
  );
}

function Row({
  year,
  tagline,
  heading,
  text,
}: {
  tagline?: string;
  heading: string;
  text?: string;
  year: string;
}) {
  return (
    <div className="flex w-full lg:even:flex-row-reverse lg:[&_div:nth-child(3)]:odd:items-start lg:[&_div:nth-child(3)]:even:items-end lg:[&_div:nth-child(3)]:even:text-right">
      <div className="lg:flex-1" />
      <ProgressBar year={year} />
      <Content heading={heading} tagline={tagline} text={text} />
    </div>
  );
}

function ProgressBar({ year }: { year: string }) {
  return (
    <div className="flex w-28 flex-col items-center md:w-32 lg:w-36">
      <span className="text-s h-min whitespace-pre text-[2rem] font-bold leading-none tracking-wide text-foreground">
        {year}
      </span>
      <div className="w-[4px] flex-1 bg-primary"></div>
    </div>
  );
}

function Content({
  tagline,
  heading,
  text,
}: {
  tagline?: string;
  heading: string;
  text?: string;
}) {
  return (
    <div className="mt-3 flex h-min flex-1 flex-col gap-6 pb-14">
      <div className="flex h-min w-max flex-col gap-2 border-t-2 border-accent pt-2">
        {tagline && <pre>{tagline}</pre>}
        <h3>{heading}</h3>
      </div>
      <p className="whitespace-pre-wrap break-words text-[12px] leading-5 tracking-widest">
        {text}
      </p>
    </div>
  );
}
