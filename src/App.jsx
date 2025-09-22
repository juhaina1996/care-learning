import React from "react";
import "@fontsource/sofia";
import { Box, Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Background from "./assets/profileCompletion/BackgroundLarge.png";

export default function App() {
  return (
    <Box
      className="app-root"
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // keeps original proportions
        backgroundPosition: "left center", // aligns to the left
        alignItems: "stretch",
      }}
    >
      {/* Full-width header */}
      <Header />

      {/* Content below header */}
      <Box display="flex" gap={4}>
        <Sidebar />
        <Box flex={1}>
          <Container maxWidth={false} disableGutters sx={{ mt: 4 }}>
            <Dashboard />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
