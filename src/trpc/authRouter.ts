import {
  AuthLoginValidator,
  AuthValidator,
} from "../lib/validator/auth-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createUser: publicProcedure
    .input(AuthValidator)
    .mutation(async ({ input }) => {
      const { email, password, username } = input;

      const payload = await getPayloadClient();

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0)
        throw new TRPCError({
          code: "CONFLICT",
        });

      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          username,
          role: "user",
        },
      });

      return {
        success: true,
        email: email,
        username: username,
      };
    }),

  logiIn: publicProcedure
    .input(AuthLoginValidator)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;

      const { res } = ctx;

      const payload = await getPayloadClient();

      try {
        await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
          res,
        });

        return { success: true };
      } catch (error) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
    }),
});
