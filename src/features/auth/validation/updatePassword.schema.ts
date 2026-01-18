import z from "zod";

export const updatePasswordSchema = z.object({
  password: z.string().nonempty().min(6, "Password is too short!"),
});

export type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>;
