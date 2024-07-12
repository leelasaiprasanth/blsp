import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
        <Image src="/gallery/leelasaiprasanth.jpg" width={100} height={100} alt="Profile picture" className="rounded-full aspect-square object-cover" />
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, Leela Sai Prasanth here!
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I am a software engineer who builds for the web with a
            design - oriented approach. In addition to coding, I make{" "}
            <Link className="underline" href="https://www.artstation.com/leela_sai_prasanth">Art Design</Link>,
            where I focus on graphics and 3D-Models.
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://github.com/leelasaiprasanth"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            GitHub
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/leelasaiprasanth/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIN
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="https://www.artstation.com/leela_sai_prasanth"
          >
            ArtStation
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
