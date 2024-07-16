"use client";

import { FeaturesCard } from "@/components/Features-Card";
import { MaxWidthComponent } from "@/components/MaxWidthComponent";
import { LampComponent } from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
      <MaxWidthComponent>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl gap-4">
          <h1 className=" md:mt-4 text-[40px] md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
            Build your work’s foundation with flipper
          </h1>
          <p className="mt-8">
            Streamline your productivity with flipper, the intuitive todo
            manager designed to simplify your day. Organize tasks effortlessly,
            prioritize with ease, and stay on track with our sleek interface.
            Whether your managing personal projects or team assignments, Flipper
            adapts to your workflow, ensuring nothing slips through the cracks.
            Join thousands who have transformed how they work – start achieving
            more today with Flipper.
          </p>
          <section className="mt-[-140px] z-[-10] w-full hidden md:block">
            <LampComponent />
          </section>
        </div>
      </MaxWidthComponent>
      <MaxWidthComponent className=" mb-4 md:mt-[-310px] mx-auto text-center flex flex-col md:flex-row justify-around items-center w-full gap-2">
        <FeaturesCard
          title="Auto time set"
          subtitle="My name is manish zond"
          imagesrc="/nature.jpg"
        />
        <FeaturesCard
          title="Marking todos"
          subtitle="My name is manish zond"
          imagesrc="/nature.jpg"
        />
      </MaxWidthComponent>
    </>
  );
}
