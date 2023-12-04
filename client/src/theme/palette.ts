const PRIMARY = {
  light: "#82F8EC",
  main: "#05F1D8",
  dark: "#04E2CB",
};

const ERROR = {
  light: "#FF5B5F",
  main: "#FC0635",
  dark: "#C0000F",
};

const WARNING = {
  light: "#ffd94a",
  main: "#ffa800",
  dark: "#c67900",
};

const INFO = {
  light: "#999999",
  main: "#0288D1",
  dark: "#005b9f",
};

const SUCCESS = {
  light: "#57e5a1",
  main: "#00B272",
  dark: "#008146",
};

const COMMON = {
  primary: { ...PRIMARY },
  error: { ...ERROR },
  warning: { ...WARNING },
  info: { ...INFO },
  success: { ...SUCCESS },
};

const palette = {
  light: {
    ...COMMON,
    background: { default: "#EEF5F7" },
    text: {
      primary: "#062F41",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "#062F41",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.35)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.05)",
    },
  },
};

export default palette;
