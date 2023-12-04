import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import componentsOverrides from "./overrides";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import { deepmerge } from "@mui/utils";

const ThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette: palette.light,
      shadows: shadows.light,
      shape: { borderRadius: 6 },
    }),
    []
  );

  const ltrTheme = createTheme(deepmerge({ direction: "ltr" }, themeOptions));
  ltrTheme.components = componentsOverrides(ltrTheme);

  return (
    <MUIThemeProvider theme={ltrTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
