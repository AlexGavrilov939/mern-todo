export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        ".grecaptcha-badge": {
          visibility: "hidden",
        },
        input: {
          "&::-ms-reveal": {
            display: "none",
          },
          "&::-ms-clear": {
            display: "none",
          },
        },
      },
    },
  };
}
