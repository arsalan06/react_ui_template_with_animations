import React from "react";
import { Box, Grid, Typography, Chip, Button } from "@mui/material";
import { mainTitle, simpleText } from "./paymentBannerStyles";
import DottedPagination from "../DottedPagination.js/DottedPagination";
import smalLogo from "../../assets/smalLogo.png";
import payIcons from "../../assets/payIcons.png";
import "./paymentBanner.css";
function PaymentBanner() {
  return (
    <Box sx={{ mt: 15 }}>
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
            <Chip
              label="One Integration, Endless Solutions"
              sx={{
                "&.MuiChip-root": {
                  backgroundColor: "#1A4743",
                  color: "#7CDDAE",
                },
              }}
            />
            <Typography sx={mainTitle}>
              Welcome to payabl. an <strong>omniverse</strong> of payments.
            </Typography>
            <Typography sx={simpleText}>
              Game-changing financial solutions for businesses with their eyes
              on global domination. Explore the endless payments possibilities
              with payabl. and level-up your business today.
            </Typography>
            <DottedPagination activeDot={1} totalDots={4} />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "20px 28px",
              background: "white",
              borderRadius: 4,
            }}
          >
            <img src={smalLogo} alt="smalLogo" />
            <Typography
              sx={{
                "&.MuiTypography-root": {
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "18px",
                  mt: 4,
                },
              }}
            >
              Choose Payment Method
            </Typography>
            <Typography sx={simpleText}>
              Please select the payment option that you prefer
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={payIcons} alt="payIcons" className="zoom-in-zoom-out" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  "&.MuiButton-root": {
                    border: "none",
                    color: "black",
                    backgroundColor: "#7CDDAE",
                    borderRadius: 2,
                    boxShadow: "none",
                    fontWeight: 600,
                    width: "100%",
                    mt: 2,
                  },
                }}
              >
                Pay 45.50 EUR
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentBanner;
