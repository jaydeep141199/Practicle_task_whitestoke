import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <AppShell padding="10%" bg={"#55a6e7ff"}>
      <AppShell.Main >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default PublicLayout;
