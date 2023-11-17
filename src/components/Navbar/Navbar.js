import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          "&.MuiAppBar-root": {
            backgroundColor: "transparent !important",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            "&.MuiToolbar-root": {
              padding: "10px 95px",
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <Box>
            <img src={logo} alt="logo" />
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                "&.MuiButton-root": {
                  border: "1px solid white",
                  color: "white",
                  borderRadius:2
                },
              }}
            >
              Login
            </Button>
            &nbsp;
            &nbsp;
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-root": {
                  border: "none",
                  color: "black",
                  backgroundColor: "#7CDDAE",
                  borderRadius:2
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
