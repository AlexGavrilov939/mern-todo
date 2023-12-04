import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Page from "../Page";

const Page404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Page title={t("global.page_not_found")}>
      <Container maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
        <Card>
          <CardContent
            sx={{ p: 4, "&:last-child": { pb: 4 }, textAlign: "center" }}
          >
            <Box
              component="img"
              sx={{
                display: "block",
                mb: 4,
              }}
              src={"/images/rectangles/Rectangle_4.png"}
              alt="Rectangle background"
            />

            <Typography component="h1" variant="h4" sx={{ mb: 1.5 }}>
              {t("pages.not_found.heading")}
            </Typography>

            <Typography variant="body2" sx={{ mb: 3 }}>
              <Trans>{"pages.not_found.subheading"}</Trans>
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ mb: 3 }}
              onClick={() => navigate(-1)}
            >
              {t("global.go_back")}
            </Button>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Logo />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default Page404;
