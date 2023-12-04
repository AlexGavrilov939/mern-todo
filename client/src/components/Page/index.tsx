import { Box } from "@mui/material";
import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const Page = forwardRef(
  (
    {
      children,
      title = "",
      meta,
      sx,
      ...other
    }: {
      children: JSX.Element | JSX.Element[];
      title: string;
      meta?: JSX.Element | JSX.Element[];
      sx?: SxProps<Theme>;
    },
    ref,
  ) => (
    <>
      <Helmet>
        <title>{title}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other} sx={sx}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
