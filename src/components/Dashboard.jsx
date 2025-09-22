import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProgressList from "./ProgressList";
import ProfileCompletion from "./ProfileCompletion";
import StatsCard from "./StatsCard";
import SearchIcon from "../assets/sidebar/search.png";
import DashboardProgress from "./Progress";
import SpotlightSection from "./SpotlightSection";
import CoursesSection from "./CoursesSection";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* Full-width row */}
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* Left: Welcome Section */}
            <Box sx={{ flex: "0 0 30%" }}>
              {/* Heading */}
              <Box mb={1} mt={3}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Sofia Pro, sans-serif",
                    fontSize: { xs: "26px", md: "30px" },
                    fontWeight: 400,
                    lineHeight: 1.02,
                    color: "#000",
                  }}
                >
                  Welcome{" "}
                  <Box
                    component="span"
                    sx={{ color: "#2050E4", fontWeight: 400 }}
                  >
                    Ken
                  </Box>
                  , here's
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Sofia Pro, sans-serif",
                    fontSize: { xs: "32px", md: "28px" },
                    fontWeight: 600,
                    lineHeight: 1.1,
                    color: "#000",
                    mt: 0.5,
                  }}
                >
                  how things stand today
                </Typography>
              </Box>

              {/* Subtitle */}
              <Typography
                color="text.secondary"
                sx={{
                  fontFamily: "Sofia Pro, sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  mb: 3,
                }}
              >
                Explore courses from experienced, real-world experts.
              </Typography>

              {/* Buttons */}
              <Box display="flex" gap={2} alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2050E4",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "999px",
                    padding: "21px 25px",
                    lineHeight: "0px",
                    fontFamily: "Sofia Pro, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    "&:hover": {
                      backgroundColor: "#254edb",
                      boxShadow: "0 10px 30px rgba(37,78,219,0.14)",
                    },
                  }}
                >
                  Resume course
                </Button>
                <img src={SearchIcon} alt="search" width={40} height={40} />
              </Box>
            </Box>

            {/* Right: Profile Completion */}
            <Box sx={{ flex: "0 0 65%" }}>
              <ProfileCompletion />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={3} mt={3}>
        {" "}
        <DashboardProgress />
      </Grid>
      <SpotlightSection />
      <CoursesSection />
      <Footer />
    </Box>
  );
}
