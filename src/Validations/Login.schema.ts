import z from "zod";
import { emailRegex } from "./signUp.schema";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .regex(emailRegex, "Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters long"),
});
const LoginDefaultValues = {
  email: "",
  password: "",
};

export { LoginSchema, LoginDefaultValues };
