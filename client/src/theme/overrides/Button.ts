import { Theme } from "@mui/material";
import { pxToRem } from "../../utils/getFontValue";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          lineHeight: 24 / 14,
          fontSize: pxToRem(14),
          borderRadius: pxToRem(100),
          padding: "8px 16px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          fontWeight: 500,
          lineHeight: 26 / 16,
          fontSize: pxToRem(14),
          padding: "12px 32px",
        },
        sizeSmall: {
          fontWeight: 500,
          lineHeight: 22 / 13,
          fontSize: pxToRem(14),
          padding: "4px 10px",
        },
        contained: {
          "&:active": {
            boxShadow: "none",
          },
        },
        containedInherit: {
          boxShadow: "none",
        },
        containedPrimary: {
          boxShadow: "none",
        },
        containedSecondary: {
          boxShadow: "none",
        },
        containedInfo: {
          boxShadow: "none",
        },
        containedSuccess: {
          boxShadow: "none",
        },
        containedWarning: {
          boxShadow: "none",
        },
        containedError: {
          boxShadow: "none",
        },
        outlinedPrimary: {
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.primary,
          "&:hover": {
            borderColor: theme.palette.text.primary,
          },
          "&:active": {
            borderColor: theme.palette.text.primary,
          },
        },
        text: {
          borderRadius: "4px",
          color: theme.palette.text.primary,
          padding: "6px 8px",
          "&:hover": {
            backgroundColor: "#1976D20A",
          },
        },
        textSizeSmall: {
          padding: "4px 5px",
        },
        textSizeLarge: {
          padding: "8px 11px",
        },
      },
    },
  };
}
