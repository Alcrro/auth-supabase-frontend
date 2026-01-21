import z from "zod";

export const credentialsLoginSchema = z.object({
  //campul email trebuie sa fie string
  email: z.string().superRefine((val, ctx) => {
    // daca email este gol sau contine doar spatii
    if (!val.trim()) {
      //a adaugam manual o erare custom
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is required",
      });

      //oprim alte validari pentru acest camp
      return;
    }
    // verificam daca emailul nu respecta formatul valid
    if (!z.string().email().safeParse(val).success) {
      // adaugam eroare pentru format invalid

      // eroare custom pentru camp obligatoriu
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid email password",
      });
    }
  }),
  password: z.string().superRefine((val, ctx) => {
    if (!val.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is required",
      });

      return;
    }
    if (val.length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must be at least 6 characters",
      });
    }
    if (val.length > 24) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must be at least 24 characters",
      });
    }
  }),
});

export type CredentialsLoginInput = z.infer<typeof credentialsLoginSchema>;
