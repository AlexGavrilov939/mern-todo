import { Theme } from "@mui/material";

export default function Popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
        },
      },
    },
  };
}
