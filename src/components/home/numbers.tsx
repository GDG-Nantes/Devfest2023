import { AccessibilityNew } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { MyLink } from "../../helpers/links";
import { IconButton } from "gatsby-theme-material-ui";

export const DevfestNumbers = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.numbers",
  });
  return (
    <Stack justifyContent={"center"}>

    <Grid
      container
      columnSpacing={1}
      rowSpacing={2}
      justifyContent="center"
      margin="20px 0"
      >
      <Number label="attendees" value={3500} />
      <Number label="days" value={2} />
      <Number label="sessions" value={71} />
      <Number label="tracks" value={4} />
      <Number label="speakers" value={"90+"} />
    </Grid>
    <Grid
      container
      columnSpacing={1}
      rowSpacing={2}
      justifyContent="center"
      margin="20px 0"
      >
      <Grid item minWidth={100} xs={6} sm={6} md={4} lg={2}>
        <MyLink to="/our-values">
          <Stack textAlign="center" alignItems="center">
            <IconButton aria-label="people icon">            
              <AccessibilityNew sx={{ fontSize: 60 }}></AccessibilityNew>
            </IconButton>
            <p>{t("our-values")}</p>
          </Stack>
        </MyLink>
      </Grid>     
    </Grid>
    </Stack>
  );
};

const Number: React.FC<{ label: string; value: number | string }> = ({
  label,
  value,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.numbers",
  });

  return (
    <Grid item minWidth={100} xs={6} sm={6} md={4} lg={2}>
      <Stack textAlign="center">
        <Typography variant="h2" margin="10px 0">
          {value}
        </Typography>
        <p>{t(label)}</p>
      </Stack>
    </Grid>
  );
};
