import React from "react";
import { Box, Typography } from "@mui/material";
import { mainTitle, simpleText } from "./iconsBannerStyles";
import bannerIcons from "../../assets/bannerIcons.png";
function IconsBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 20,
      }}
    >
      <Box sx={{ width: "40%", textAlign: "center" }}>
        <Typography sx={mainTitle}>All about payabl. and what we do</Typography>
        <Typography sx={simpleText}>
          Our wide range of payments products includes card acquiring, banking
          services,local payment methods and POS terminals. We supercharge your
          business growth with oureasy-to-install payment tech, smart fraud
          prevention and dedicated customer support.Welcome to payabl. where we
          take care of the payments, so you can take care of business.
        </Typography>
      </Box>
      <Box sx={{ mt: 10 }}>
        <img
          src={bannerIcons}
          alt="bannerImage"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default IconsBanner;
