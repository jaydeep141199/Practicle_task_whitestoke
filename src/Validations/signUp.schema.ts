import z from "zod";
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignUpSchema = z.object({
    name: z.string().min(1, "First name is required"),
    email: z.string().min(1, "email is required").regex(emailRegex, "Invalid email address"),
    mobile_number: z.string().regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirm_password: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
});

const SignUpDefaultValues = {
    name: "",
    email: "",
    password: "",
    mobile_number: "",
    confirm_password: "",
};     

export type SignUpFormData = z.infer<typeof SignUpSchema>;

export { SignUpSchema, SignUpDefaultValues };   