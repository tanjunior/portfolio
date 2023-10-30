import { Icons } from "@/icons";
import ResumeForm from "@/ResumeForm";
import { Button } from "@/ui/button";

export default function page() {
  return (
    <section className="mt-6 flex flex-col items-center gap-4">
      <div className="flex h-max w-full items-center justify-center gap-2">
        <a href="https://wa.me/+6597605656" target="_blank" rel="noreferrer">
          <Icons.whatsapp className="m-0 h-[88px] p-0" />
        </a>

        <a href="https://t.me/ejoojoo" target="_blank" rel="noreferrer">
          <Icons.telegram className="h-20" />
        </a>

        <a href="https://github.com/tanjunior" target="_blank" rel="noreferrer">
          <Icons.gitHub className="h-20" />
        </a>

        <a
          href="https://www.linkedin.com/in/tanjingren/"
          target="_blank"
          rel="noreferrer"
        >
          <Icons.linkedin className="h-20" />
        </a>
      </div>
      <ResumeForm />
      <Button>
        <a href="/static/Resume.pdf" target="_blank">
          Download resume
        </a>
      </Button>
    </section>
  );
}
