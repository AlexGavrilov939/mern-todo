import { pxToRem } from "../utils/getFontValue";

const FONT_PRIMARY = ["Inter,sans-serif", "Tajawal, sans-serif"].join(",");

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    lineHeight: 48 / 40,
    fontSize: pxToRem(40),
  },
  h2: {
    fontWeight: 500,
    lineHeight: 36 / 30,
    fontSize: pxToRem(30),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 27 / 22,
    fontSize: pxToRem(22),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 22 / 18,
    fontSize: pxToRem(18),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 19 / 16,
    fontSize: pxToRem(16),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 1.6,
    fontSize: pxToRem(20),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.75,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.57,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.4,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.66,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 400,
    lineHeight: 2.66,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 500,
    lineHeight: 1.4,
    fontSize: pxToRem(14),
    textTransform: "none" as const,
  },
};

export default typography;
