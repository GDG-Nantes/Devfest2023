import { PhotoCamera, YouTube } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { MyLink } from "../../helpers/links";

export const HomeJumbo = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.jumbo",
  });

  return (
    <>
      <img
        className="logo-jumbo-home"
        alt="logo"
        src="/images/logo_transparent.svg"
        height="300"
        width="500"
      />

      <Typography variant="h1" textAlign="center">
        {t("date")}
      </Typography>

      <Typography variant="subtitle1" textAlign="center">
        Code, Dev, et... Action !
      </Typography>
      <Stack direction="row" spacing={3}>
        <Button
          color="secondary"
          variant="contained"
          aria-label={t("previous")}
        >
          {t("previous")}
        </Button>
      </Stack>
    </>
  );
};
