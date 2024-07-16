import z from "zod";

export const AuthValidator = z.object({
  username: z.string(),
  email: z.string().email({
    message: "enter valid email",
  }),
  password: z.string().min(8, {
    message: "word should be 8 charector long",
  }),
});

export const AuthLoginValidator = z.object({
  email: z.string().email({
    message: "enter valid email",
  }),
  password: z.string().min(8, {
    message: "word should be 8 charector long",
  }),
});

export type TAuthLoginValidator = z.infer<typeof AuthLoginValidator>;
export type TAuthValidator = z.infer<typeof AuthValidator>;
