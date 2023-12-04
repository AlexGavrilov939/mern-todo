import { SxProps, Theme, Typography } from "@mui/material";
import { alpha } from "@mui/material";

type StatusType = {
  status: string;
  sx?: SxProps<Theme>;
};

const Status = ({ status = "active", sx = {} }: StatusType) => {
  return (
    <Typography
      component="span"
      variant="caption"
      sx={{
        ...sx,
        ...(status === "active" && {
          color: "warning.main",
          backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.12),
        }),
        ...(status === "completed" && {
          color: "info.light",
          backgroundColor: (theme) => alpha(theme.palette.info.light, 0.12),
        }),
        ...(!["active", "completed"].includes(status) && {
          color: "info.light",
          backgroundColor: (theme) => alpha(theme.palette.info.light, 0.12),
        }),
        borderRadius: "6px",
        px: 1.25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        minHeight: "32px",
        minWidth: "80px",
      }}
    >
      {status}
    </Typography>
  );
};

export default Status;
