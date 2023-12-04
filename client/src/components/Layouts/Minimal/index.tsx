import { Stack, Theme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../Logo";
export default function Index() {
  return (
    <Stack direction="column" justifyContent="space-between" height="100vh">
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "absolute",
          left: (theme: Theme) => theme.spacing(8),
          top: (theme: Theme) => theme.spacing(8),
        }}
      >
        <Logo />
      </Stack>
      <Outlet />
    </Stack>
  );
}
