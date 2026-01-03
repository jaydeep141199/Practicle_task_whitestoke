import { AppShell,  Menu, Paper, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const loginuser = localStorage.getItem("loggedInUser");
  if (!loginuser) {
    return <Navigate to="/login" />;
  }
  const user = JSON.parse(loginuser);
  const handlelogout = () => {
    const result = window.confirm("Are you sure you want to logout?");
    if (result) {
      localStorage.removeItem("loggedInUser");
      navigate("/login");
    }
  };
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Paper radius={"md"} mr={10}>
              <Text style={{ cursor: "pointer", fontWeight: "bold" }}>
                {user?.name}
              </Text>
              <Text style={{ cursor: "pointer" }}>{user?.email}</Text>
            </Paper>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconLogout size={14} />}
              onClick={() => {
                handlelogout();
              }}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default PrivateRoute;
