import { PhotoSharp, YouTube } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const HomeJumbo = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const {t} = useTranslation("translation", {
    keyPrefix: "pages.home.jumbo",
  });

  return (
    <>
      <div className="logo-jumbo-home">
        <img
          alt="logo"
          src="/images/logo_transparent.svg"
          height="200"
          width="400"
        />
      </div>

      <Typography variant="h1" textAlign="center">
        {t("date")}
      </Typography>
      <Typography
        variant="h2"
        textAlign="center"
        style={{marginTop: "10px", marginBottom: "25px"}}
      >
        Code, Dev, et... Action !
      </Typography>
      <Stack direction="column" spacing={3}>
        {/*<Stack direction="row" spacing={3} justifyContent={"center"}>*/}
        {/*  <Button*/}
        {/*    color="secondary"*/}
        {/*    variant="contained"*/}
        {/*    href="https://devfest2022.gdgnantes.com"*/}
        {/*    aria-label={t("previous")}*/}
        {/*  >*/}
        {/*    {t("previous")}*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    color="secondary"*/}
        {/*    variant="contained"*/}
        {/*    href="https://conference-hall.io/public/event/z5FSBfmwJSUWb4UO9hD4"*/}
        {/*    aria-label={t("cfp")}*/}
        {/*  >*/}
        {/*    {t("cfp")}*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
        <Stack direction="row" spacing={3} justifyContent={"center"}>
          {/*<Button*/}
          {/*  color="secondary"*/}
          {/*  variant="contained"*/}
          {/*  href="https://www.billetweb.fr/partenaire-devfest-nantes"*/}
          {/*  aria-label="Devenir Sponsor"*/}
          {/*>*/}
          {/*  Devenir Sponsor*/}
          {/*</Button>*/}
          {/*<Button*/}
          {/*  color="secondary"*/}
          {/*  variant="contained"*/}
          {/*  href="https://www.billetweb.fr/devfest-nantes"*/}
          {/*  aria-label="Billetterie"*/}
          {/*>*/}
          {/*  Billetterie*/}
          {/*</Button> */}
          {/* 
          <Button
            color="secondary"
            variant="contained"
            href="https://billetterie.gdgnantes.com"
            aria-label="Send tickets"
            target={"_blank"}
          >
            {t('resend-tickets')}
          </Button>
          <Button
          color="secondary"
          variant="outlined"
          onClick={() => setModalOpen(true)}
          aria-label="Send tickets"
          >
          {t('get-app')}
        </Button> */}
        <Button
          color="secondary"
          startIcon={<YouTube/>}
          variant="contained"
          href="https://www.youtube.com/watch?v=yr2hjzsdICg&list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT"
          aria-label="Videos"
          target={"_blank"}
        >
          Videos
        </Button>
        <Button
          color="secondary"
          startIcon={<PhotoSharp/>}
          variant="contained"
          href="https://photos.app.goo.gl/wWF5PWykG2g2umC47"
          aria-label="Photos"
          target={"_blank"}
        >
          Photos
        </Button>

        </Stack>
        {/* <Stack direction="row" spacing={3} justifyContent={"center"}>
          <Button href="/our-values" color="secondary">{t('bring-ecocup')}</Button>
        </Stack> */}
      </Stack>
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(false)} className={"modal-apps"}>
        <Paper className={"modal-content"}>
          <Box className={"modal-body"}>
            <Stack spacing={[5,5]} direction={["column", "row"]}>
              <Button
                color="secondary"
                variant="contained"
                href="https://apps.apple.com/fr/app/devfest-nantes/id6443489706"
                aria-label="iOS app"
                startIcon={<Apple/>}
              >
                iOS
              </Button>
              <Button
                color="secondary"
                variant="contained"
                href="https://play.google.com/store/apps/details?id=com.gdgnantes.devfest.androidapp&pli=1"
                aria-label="Android app"
                startIcon={<Android/>}
              >
                Android
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Modal> */}
    </>
  );
};
