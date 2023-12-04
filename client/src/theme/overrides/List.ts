import { alpha, Theme } from "@mui/material";

export default function List(theme: Theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          transition: theme.transitions.create(["background-color", "color"], {
            duration: theme.transitions.duration.shortest,
          }),
          "&.Mui-selected": {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.common.white,
            "&.Mui-focusVisible": {
              backgroundColor: theme.palette.action.focus,
              color: theme.palette.text.primary,
            },
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.text.primary,
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: alpha(
                theme.palette.text.primary,
                theme.palette.action.selectedOpacity
              ),
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: "10px",
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "10px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  };
}
