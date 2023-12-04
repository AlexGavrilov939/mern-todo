import { Logout as LogoutIcon, Person } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { HEADER, NAVBAR } from "../../../../config/config";
import useIsMountedRef from "../../../../hooks/useIsMountedRef";
import useTitle from "../../../../hooks/useTitle";

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  [theme.breakpoints.up("lg")]: {
    height: HEADER.MOBILE_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    marginLeft: `${NAVBAR.DASHBOARD_WIDTH + 1}px`,
  },
}));

export default function Header() {
  const { title } = useTitle();
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);
  const isMountedRef = useIsMountedRef();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    // await logout();
    if (isMountedRef.current) {
      handleClose();
    }
  };

  return (
    <RootStyle color="inherit" elevation={0} position="relative">
      <Toolbar
        sx={{
          minHeight: "100% !important",
          justifyContent: "space-between",
          px: { lg: 5 },
        }}
      >
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Box>
          <Button onClick={handleOpen} data-testid="user-avatar">
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Avatar sx={{ width: 32, height: 32 }}>
                <Person sx={{ color: "#fff" }} />
              </Avatar>
              <Typography variant="body2">{`user 1`}</Typography>
            </Stack>
          </Button>
          <Popover
            id="account-appbar"
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            elevation={1}
          >
            <List sx={{ p: 3 }} data-testid="account-appbar-list">
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Logout"}
                  primaryTypographyProps={{ variant: "h5" }}
                />
              </ListItemButton>
            </List>
          </Popover>
        </Box>
      </Toolbar>
    </RootStyle>
  );
}
