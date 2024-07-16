import { cn } from "@/lib/utils";

interface MaxWidthComponentProps {
  className?: string;
  children: React.ReactNode;
}

export const MaxWidthComponent = ({
  children,
  className,
}: MaxWidthComponentProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
