import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NAVBAR } from "../../../config/config";
import Header from "./Header";
import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";

export default function Dashboard() {
  return (
    <>
      <Box>
        <Header />
        <Navbar />
        <Box display="flex" flexDirection="column" minHeight="95vh">
          <CssBaseline />
          <Box
            component="main"
            sx={{
              width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
              marginLeft: `${NAVBAR.DASHBOARD_WIDTH + 1}px`,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
