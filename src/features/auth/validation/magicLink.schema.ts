// features/auth/validation/magicLink.schema.ts
import { z } from "zod";

export const magicLinkSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type MagicLinkInput = z.infer<typeof magicLinkSchema>;
