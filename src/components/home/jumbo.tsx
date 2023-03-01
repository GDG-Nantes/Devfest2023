import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

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

      <Stack direction="column" spacing={2}>
        <Typography variant="subtitle1" textAlign="center">
          Code, Dev, et... Action !
        </Typography>
        <Stack direction="row" spacing={3} justifyContent={"center"}>
          <Button
            color="secondary"
            variant="contained"
            href="https://devfest2022.gdgnantes.com"
            aria-label={t("previous")}
          >
            {t("previous")}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
