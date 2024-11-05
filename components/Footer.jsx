"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Sheet
      variant="solid"
      sx={{
        bgcolor: "#771818", // Dark background for footer
        color: "#fff", // White text for contrast
        p: 3,
        borderRadius: { xs: 0, sm: "sm" },
        mt: 4, // Add margin-top for separation from content
        bottomMargin:  "10px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography level="h5" sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "center" }}>
          Stay Connected
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ borderColor: "#fff" }} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton variant="plain">
            <FacebookRoundedIcon sx={{ color: "#3b5998" }} />
          </IconButton>
          <IconButton variant="plain">
            <GitHubIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton variant="plain">
            <TwitterIcon sx={{ color: "#1da1f2" }} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ my: 2, borderColor: "#fff" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <List size="sm" orientation="vertical" wrap sx={{ "--ListItem-radius": "8px" }}>
          <ListItem nested sx={{ width: { xs: "100%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "bold", color: "#fff" }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "100%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "bold", color: "#fff" }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>Base UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ color: "#fff" }}>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>

      <Typography sx={{ textAlign: "center", mt: 3, fontSize: "12px", opacity: 0.6 , color : "white" }}>
        © 2024 - All rights reserved
      </Typography>
    </Sheet>
  );
}

export default Footer;
