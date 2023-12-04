import { Stack, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import React from "react";

export default function Logo() {
  return (
    <Stack
      data-testid="logo"
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ px: 2 }}
    >
      <TaskAltIcon sx={{ width: "30px", height: "30px" }} />
      <Typography component="span" variant="h3">
        Todo
      </Typography>
    </Stack>
  );
}
