import { Breakpoint, Theme } from "@mui/material";

export default function Dialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => ({
          ...(ownerState.maxWidth !== "xs" && {
            maxWidth: `calc(${
              theme.breakpoints.values[ownerState.maxWidth as Breakpoint]
            }px - 2 * ${theme.spacing(2)})`,
            [theme.breakpoints.up("sm")]: {
              maxWidth: `calc(${
                theme.breakpoints.values[ownerState.maxWidth as Breakpoint]
              }px - 2 * ${theme.spacing(3)})`,
              [`&.MuiDialog-paperScrollBody`]: {
                [theme.breakpoints.down(
                  theme.breakpoints.values[ownerState.maxWidth as Breakpoint] +
                    32 * 2
                )]: {
                  maxWidth: "calc(100% - 64px)",
                },
              },
            },
          }),
          "&.MuiPaper-rounded": {
            borderRadius: Number(theme.shape.borderRadius) * 2,
          },
          "&.MuiDialog-paperFullScreen": {
            borderRadius: 0,
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5, 5, 0),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 5),
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 5, 5),
        },
      },
    },
  };
}
