import { Theme } from "@mui/material";
import { pxToRem } from "../../utils/getFontValue";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)",
          borderRadius: pxToRem(4),
          padding: "4px",
        },
        select: {
          "&.MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          color: "rgba(6, 47, 65, 1)",
        },
      },
    },
  };
}
