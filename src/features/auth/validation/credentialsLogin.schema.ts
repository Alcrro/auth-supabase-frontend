import z from "zod";

export const credentialsLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password too short"),
});

export type CredentialsLoginInput = z.infer<typeof credentialsLoginSchema>;
