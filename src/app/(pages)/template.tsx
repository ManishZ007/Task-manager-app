"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskCreater } from "@/components/TaskCreater";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full relative grid grid-cols-11 gap-4 pt-[65px] lg:px-0 h-[100vh]">
        <div className="col-span-2 border-r-[1px] border-neutral-900 flex flex-col items-center gap-3 py-3 px-4">
          <TaskCreater />
        </div>
        <div className="col-start-3 col-span-8  ">{children}</div>

        <div className="col-end-12 col-span-1 ">hello</div>
      </div>
    </>
  );
}
