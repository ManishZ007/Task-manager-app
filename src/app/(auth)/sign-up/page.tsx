"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthValidator, TAuthValidator } from "@/lib/validator/auth-validator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client";

const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthValidator>({
    resolver: zodResolver(AuthValidator),
  });

  const { mutate } = trpc.auth.createUser.useMutation({
    onError: async (err) => {
      if (err.data?.code == "CONFLICT") {
        toast.error("this user already exist, try to log in");
        return;
      }

      if (err instanceof ZodError) {
        toast.error(err.issues[0].message);
        return;
      }

      toast.error("Somthing went wrong. Please try again");
    },
    onSuccess: async ({ username }) => {
      toast.success(`new user is created colled ${username}`);
      router.push("/log-in");
    },
  });

  const onSubmit = ({ email, username, password }: TAuthValidator) => {
    mutate({ email, username, password });
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto my-20 flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">
              Create an accout with flipper
            </h1>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    {...register("username")}
                    placeholder="username"
                    type="text"
                    className={cn({
                      "focus-visible:ring-red-500": errors.username,
                    })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    placeholder="you@example.com"
                    type="email"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    placeholder="Password"
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button type="submit">Sign up</Button>
              </div>
            </form>
          </div>
          <Link
            href="log-in"
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
          >
            Already have an account? Login
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
