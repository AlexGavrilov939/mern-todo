import { Theme } from "@mui/material";
import { pxToRem } from "../../utils/getFontValue";

export default function Input(theme: Theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => ({
          ...(!ownerState.disableUnderline &&
            ownerState.color === "primary" && {
              "&:after": {
                borderBottomColor: theme.palette.text.secondary,
              },
            }),
          "&.Mui-disabled:before": {
            borderBottomStyle: "solid",
          },
          "&.Mui-disabled:after": {
            borderBottomColor: "rgba(0, 0, 0, 0.42)",
          },
          lineHeight: "initial",
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          lineHeight: 24 / 16,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-standard	": {
            fontSize: pxToRem(14),
          },
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
          "&.Mui-error": {
            color: theme.palette.text.secondary,
          },
          "&.Mui-focused&.Mui-error": {
            color: theme.palette.error.main,
          },
        },
      },
    },
  };
}
