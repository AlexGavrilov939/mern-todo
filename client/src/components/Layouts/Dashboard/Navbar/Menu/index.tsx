import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function Index() {
  return (
    <Box sx={{ mt: 4 }}>
      <List>
        <ListItemButton data-testid="dashboard-item">
          <ListItemIcon data-testid="home-icon">
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Dashboard"}
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
