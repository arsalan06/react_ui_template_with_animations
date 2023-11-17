import React, { useState } from "react";
import { Box, Typography, Chip, Grid, Button } from "@mui/material";
import "./ContactBanner.css";
import { mainTitle, simpleText } from "../IconsBanner/iconsBannerStyles";
function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
        mb: 10,
      }}
    >
    <div class="gradient-div">
    <div class="content">
      <h2>Hello, Hover Me!</h2>
      <p>This is some content inside the div.</p>
    </div>
  </div>
      {/* <div className="hover-effect">
        <div className="text">
          <Typography
            sx={{
              "&.MuiTypography-root": {
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "24px",
                color: "black",
              },
            }}
          >
            Welcome to payabl. an <strong>omniverse</strong> of payments.
          </Typography>
          <Typography sx={simpleText}>
            Game-changing financial solutions for businesses with their eyes on
            global domination. Explore the endless payments possibilities with
            payabl. and level-up your business today.
          </Typography>
        </div>
      </div> */}
    </Box>
  );
}

export default ContactBanner;
