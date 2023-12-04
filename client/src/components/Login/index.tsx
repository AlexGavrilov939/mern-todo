import {
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Page from "../Page";
import { PATH_AUTH } from "../Routes/paths";
import LoginForm from "./LoginForm";

const Login = () => {
  const { t } = useTranslation();

  return (
    <Page title={t("global.login")}>
      <Container maxWidth="md" sx={{ pt: 8, pb: 6 }}>
        <Card>
          <CardContent sx={{ p: 4, "&:last-child": { pb: 5 } }}>
            <Stack direction="row" spacing={4}>
              <Box sx={{ flex: "1 0 0%" }}>
                <Typography variant="h4" component="h1" sx={{ mb: 1.5 }}>
                  {t("pages.login.heading")}
                </Typography>

                <Typography variant="body2" sx={{ mb: 4 }}>
                  {t("pages.login.subheading")}
                </Typography>

                <LoginForm />
              </Box>

              <Box width="308px" position="relative">
                <Box
                  component="img"
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                  src="/images/rectangles/Rectangle_2.jpg"
                  alt="Rectangle background"
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default Login;
