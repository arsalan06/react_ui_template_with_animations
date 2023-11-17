import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import bannerImage from "../../assets/bannerImage.png";
import { mainTitle, simpleText } from "./mainBannerStyles";
function MainBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "#022128 !important",
        mt:6
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          md={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "15px 95px",
            }}
          >
            <Typography sx={mainTitle}>
              Welcome to payabl. an <strong>omniverse</strong> of payments.
            </Typography>
            <Typography sx={simpleText}>
              Game-changing financial solutions for businesses with their eyes
              on global domination. Explore the endless payments possibilities
              with payabl. and level-up your business today.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  "&.MuiButton-root": {
                    border: "none",
                    color: "black",
                    backgroundColor: "#7CDDAE",
                    borderRadius: 2,
                  },
                }}
              >
                Let’s Talk
              </Button>
              &nbsp; &nbsp;
              <Button
                variant="outlined"
                sx={{
                  "&.MuiButton-root": {
                    border: "1px solid white",
                    color: "white",
                    borderRadius: 2,
                  },
                }}
              >
                What’s New?
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} lg={6}>
          <img
            src={bannerImage}
            alt="bannerImage"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainBanner;
