import { Logout as LogoutIcon } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { NAVBAR } from "../../../../config/config";
import Logo from "../../../Logo";
import Menu from "./Menu";

export default function Navbar() {
  const renderContent = (
    <Box
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Logo />

      <Menu />

      <Box sx={{ flexGrow: 1 }} />

      <List sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Logout"}
            primaryTypographyProps={{ variant: "h5" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Drawer
      open
      variant="persistent"
      PaperProps={{
        sx: {
          width: NAVBAR.DASHBOARD_WIDTH,
          p: "20px 12px 40px",
          borderRight: 0,
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
