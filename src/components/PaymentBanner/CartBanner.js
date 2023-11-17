import React, { useState } from "react";
import { Box, Typography, Chip, Grid, Button } from "@mui/material";
import { mainTitle, simpleText } from "./paymentBannerStyles";
function CartBanner() {
  const [currentPage, setCurrentPage] = useState(1);
  const [themeColor, setThemeColor] = useState("#B0A3FF");
  let totalDots = [
    {
      color: "#7CDDAE",
    },
    {
      color: "#B0A3FF",
    },
    {
      color: "#F8B968",
    },
    {
      color: "#CD176E",
    },
  ];
  const handleClick = (index, color) => {
    setCurrentPage(index);
    setThemeColor(color);
    // Add your logic to handle page change, e.g., fetching data for the new page.
  };
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
        <Chip
          label="Testimonials"
          sx={{
            "&.MuiChip-root": {
              backgroundColor: "#1A4743",
              color: "#7CDDAE",
            },
          }}
        />
        <Typography sx={mainTitle}>
          Real stories from real customers.
        </Typography>
        <Typography sx={simpleText}>
          See what our partners are saying about our services.
        </Typography>
      </Box>
      <Box sx={{ width: "50%", textAlign: "center", mt: 6 }}>
        <Box
          sx={{
            border: `1px solid ${themeColor}`,
            padding: "4px 4px",
            borderRadius: 2,
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
                  //   width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "20px 20px",
                  backgroundColor: themeColor,
                  borderRadius: 2,
                }}
              >
                <Typography sx={mainTitle}>
                  Welcome to payabl. an <strong>omniverse</strong> of payments.
                </Typography>
                <Typography sx={simpleText}>
                  Game-changing financial solutions for businesses with their
                  eyes on global domination. Explore the endless payments
                  possibilities with payabl. and level-up your business today.
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
                // src={bannerImage}
                alt="bannerImage"
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 6,
          }}
        >
          {totalDots?.map((item, index) => (
            <div
              key={index}
              style={{
                width: index === currentPage ? "60px" : "20px",
                height: index === currentPage ? "20px" : "20px",
                margin: "0 5px",
                borderRadius: index === currentPage ? "8px" : "50%",
                backgroundColor: item?.color,
                cursor: "pointer",
                transition: "width 0.3s ease",
              }}
              onClick={() => handleClick(index, item?.color)}
            ></div>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default CartBanner;
