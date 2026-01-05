import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  SignUpSchema,
  SignUpDefaultValues,
} from "../../Validations/signUp.schema";
import type { SignUpFormData } from "../../Validations/signUp.schema";
import Input from "../../components/ui/Input";
import { Button, Stack, Title, Text, Anchor, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import MantainePassword from "../../components/ui/PasswordInput";

const SignUpPage = () => {
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(SignUpSchema),
    defaultValues: SignUpDefaultValues,
  });
  const onSubmit = (data: SignUpFormData) => {
    const existingData = JSON.parse(localStorage.getItem("userData") || "[]");
    const emailexists = existingData.some(
      (user: SignUpFormData) => user.email === data.email
    );

    console.log(emailexists, "check email");
    if (emailexists) {
      alert("Email already registered.");
      return;
    }
    alert("Registration successful!");
    existingData.push(data);
    localStorage.setItem("userData", JSON.stringify(existingData));
    methods.reset(); // Reset form after submit
    navigate("/login");
  };
  return (
    <>
      <Box
        mx={"auto"}
        maw={"500px"}
        bg="white"
        style={{ borderRadius: "xl" }}
        p="lg"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack>
              <Title order={2} ta="center" mb="lg">
                Sign Up
              </Title>
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
              <Input name="mobile_number" label="Mobile Number" />
              <MantainePassword name="password" label="Password" />
              <MantainePassword
                name="confirm_password"
                label="Confirm Password"
              />
              <Button type="submit">Sign Up</Button>
            </Stack>
          </form>
        </FormProvider>
        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor component="button" onClick={() => navigate("/login")}>
            Login
          </Anchor>
        </Text>
      </Box>
    </>
  );
};

export default SignUpPage;
