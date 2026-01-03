import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { LoginSchema, LoginDefaultValues, LoginFormData } from "../../Validations/Login.schema";
import { SignUpFormData } from "../../Validations/signUp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Title, Text, Anchor, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import MantainePassword from "../../components/ui/PasswordInput";

const LoginPage = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(LoginSchema),
    defaultValues: LoginDefaultValues,
  });
  const navigate = useNavigate();
  const onSubmit = (data: LoginFormData) => {
    const registeredUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    console.log(registeredUsers);
    const user = registeredUsers.find(
      (user: SignUpFormData) =>
        user.email === data.email && user.password === data.password
    );
    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      methods.reset();
        navigate("/product");
       // Reset form after submit
    } else {
      alert("Invalid email or password.");
    }
  }
  return (
     <Box
            mx={"auto"}
            maw={"500px"}
            bg="white"
            style={{ borderRadius: "xl" }}
            p="lg"
          >
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          mx={"auto"}
          my={"10%"}
          maw={"500px"}
          bg="white"
          style={{ borderRadius: "xl" }}
          p="lg"
        >
        <Title order={2} ta="center" mb="lg">Login</Title>
        <Input name="email" label="Email"  />
        <MantainePassword name="password" label="Password"  />
        <Button type="submit">Login</Button>

        </Stack>
      </form>
      
    </FormProvider>
    <Text ta="center" mt="md">
        Don't have an account?{" "}
        <Anchor component="button" type="button" onClick={() => navigate("/signup")}>
          Sign up
        </Anchor>
      </Text>
    </Box>
  );    
};

export default LoginPage;
