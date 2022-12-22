import z from "zod";

export const userRegistrationValidation = z.object({
  body: z.object({
    userName: z
      .string()
      .min(3, "muss mindestens drei Zeichen lang sein")
      .max(25, "darf maximal 25 Zeichen lang sein"),
    email: z.string().email("bitte gültige email Adresse eingeben"),
    password: z
      .string()
      .min(6, "muss mindestens 6 Zeichen lang sein")
      .max(65, "password darf maximal 65 Zeichen lang sein")
      .regex(new RegExp(".*[A-Z].*"), "Password muss mindestens ein uppercase Char haben")
      .regex(new RegExp(".*\\d.*"), "Password muss mindestens eine Nummer enthalten")
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "Password muss mindestens einen Special char beinhalten")
  }),
});

export const userLoginValidation = z.object({
    body: z.object({
      email: z.string().email("bitte gültige email Adresse eingeben"),
      password: z
        .string()
        .min(6, "muss mindestens 6 Zeichen lang sein")
        .max(65, "password darf maximal 65 Zeichen lang sein")
        .regex(new RegExp(".*[A-Z].*"), "Password muss mindestens ein uppercase Char haben")
        .regex(new RegExp(".*\\d.*"), "Password muss mindestens eine Nummer enthalten")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "Password muss mindestens einen Special char beinhalten")
    }),
  });
