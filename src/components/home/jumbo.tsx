import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const HomeJumbo = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.jumbo",
  });

  return (
    <>
      <div className="logo-jumbo-home">
        <img
          alt="logo"
          src="/images/logo_transparent.svg"
          height="300"
          width="600"
        />
      </div>

      <Typography variant="h1" textAlign="center">
        {t("date")}
      </Typography>
      <Typography
        variant="h2"
        textAlign="center"
        style={{ marginTop: "10px", marginBottom: "25px" }}
      >
        Code, Dev, et... Action !
      </Typography>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3} justifyContent={"center"}>
          <Button
            color="secondary"
            variant="contained"
            href="https://devfest2022.gdgnantes.com"
            aria-label={t("previous")}
          >
            {t("previous")}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            href="https://conference-hall.io/public/event/z5FSBfmwJSUWb4UO9hD4"
            aria-label={t("cfp")}
          >
            {t("cfp")}
          </Button>
        </Stack>
        <Stack direction="row" spacing={3} justifyContent={"center"}>
          <Button
            color="secondary"
            variant="contained"
            href="https://www.billetweb.fr/partenaire-devfest-nantes"
            aria-label="Devenir Sponsor"
          >
            Devenir Sponsor
          </Button>
          <Button
            color="secondary"
            variant="contained"
            href="https://www.billetweb.fr/devfest-nantes"
            aria-label="Billetterie"
          >
            Billetterie
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
