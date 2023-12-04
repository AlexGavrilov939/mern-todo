import { Palette, PaletteColor, Theme } from "@mui/material";

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => {
          const color = (ownerState.color ||
            ownerState.severity) as keyof Palette;
          const paletteColor = theme.palette[color] as PaletteColor;

          return {
            ...theme.typography.subtitle2,
            ...(color &&
              ownerState.variant === "outlined" && {
                borderRadius: "12px",
                padding: "16px",
                color: paletteColor.main,
                border: `1px solid ${paletteColor.main}`,
                [`& .MuiAlert-icon`]: {
                  color: paletteColor.main,
                },
              }),
          };
        },
      },
    },
  };
}
