import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const TaskCreater = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full mt-3">
        <button className="w-full text-sm flex items-center gap-2 text-left hover:bg-accent hover:text-accent-foreground p-[4px] rounded-sm">
          <Plus />
          Add task
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3">
          <form>
            <div className="grid gap-2">
              <div className="grid gap-2 ">
                <Input
                  className=" border-transparent outline-transparent text-xl focus-visible:ring-0 focus:outline-none focus-visible:border-none"
                  placeholder="#Title"
                />
              </div>
              <div className="grid gap-1 ">
                <Textarea
                  className="overflow-hidden text-neutral-200 border-transparent outline-transparent text-sm focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none"
                  placeholder="#Description"
                />
              </div>
            </div>

            <DialogFooter className="pt-3">
              <DialogClose>
                <Button variant="ghost">cancel</Button>
              </DialogClose>

              <Button type="submit" variant="default">
                create
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
