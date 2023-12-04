import { Theme } from "@mui/material";

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative" as const,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0,
        },
      },
    },
  };
}
