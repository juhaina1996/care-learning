import { Box, Card, Typography, Button, Grid, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LeftArrow from "../assets/profileCompletion/leftArrow.png";

// Import your assets
import SpotlightBg from "../assets/spotLightSection/spotlight-bg.png";
import CourseImage from "../assets/spotLightSection/course-image.png";
// import ResumeBg from "assets/resume-bg.png"; // replace with actual background
import ResumeUser from "../assets/spotLightSection/resume-user.png";
import Icon1 from "../assets/spotLightSection/icon1.png";
import Icon2 from "../assets/spotLightSection/icon2.png";
import Icon3 from "../assets/spotLightSection/icon3.png";
import SparkIcon from "../assets/spotLightSection/sparkIcon.png";
import SparkIconSearch from "../assets/spotLightSection/sparkIconSearch.png";

export default function SpotlightSection() {
  return (
    <Box display="flex" gap={1.5} mt={4} width="100%">
      {/* Spotlight */}

      <Box sx={{ width: "25%" }}>
        <Typography sx={{ fontWeight: 500, fontSize: "13px", ml: 3, mb: 2 }}>
          Spotlight
        </Typography>
        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            height: 320,
            maxHeight: 400,
            backgroundImage: `url(${SpotlightBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "36px" }}>
              Spotlight
            </Typography>
            <Typography sx={{ fontSize: "13px", mt: 2 }}>
              Dummy Explore the endless possibilities of creativity and
              innovation!
            </Typography>
          </Box>
          <Button
            sx={{
              mt: 4,
              alignSelf: "flex-start",
              borderRadius: "999px",
              px: 3,
              py: 1,
              fontSize: "12px",
              background: "rgba(255,255,255,0.2)",
              color: "#555555",
              fontWeight: 500,
              textTransform: "none",
              backdropFilter: "blur(6px)",
              boxShadow: `
      0px 15px 15.5px 0px #0000001F,
      0px 18px 17.4px -11px #0000001F inset,
      0px -20px 13.8px -5px #FFFFFFD1 inset,
      0px 0px 3.2px 1px #FFFFFF inset
    `,
              "&:hover": { background: "rgba(255,255,255,0.3)" },
            }}
          >
            View now
          </Button>
        </Card>
      </Box>

      {/* Top Courses */}
      <Box sx={{ width: "25%" }}>
        <Typography sx={{ fontWeight: 500, fontSize: "13px", ml: 3, mb: 2 }}>
          Top courses
        </Typography>
        <Card
          sx={{
            p: 1,
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(249, 251, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
            boxShadow:
              "11px 11px 48.6px 0px #0000000D, 0px 0px 14.5px 4px #FFFFFFA3 inset",
            height: 320,
            maxHeight: 400,
          }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "space-between",
                mb: 1.6,
                p: 1.4,
                borderRadius: 3,
                background: "#fff",
                boxShadow: " 0px 4px 5.9px 0px #f8f8f8 inset",
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <img
                  src={CourseImage}
                  alt="course"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
                    Professional Boundaries
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: "999px",
                      textTransform: "none",
                      fontSize: 8,
                      fontWeight: 300,
                      px: 2,
                      backgroundColor: "#2050E4",
                      "&:hover": { backgroundColor: "#254edb" },
                    }}
                  >
                    Click to view
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Card>
      </Box>

      {/* Resume Status */}
      <Box sx={{ width: "50%" }}>
        {/* Section Label */}
        <Typography sx={{ fontWeight: 500, fontSize: "13px", ml: 3, mb: 2 }}>
          Resume Status
        </Typography>

        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(249, 251, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
            boxShadow:
              "11px 11px 48.6px 0px #0000000D, 0px 0px 14.5px 4px #FFFFFFA3 inset",
            display: "flex",
            flexDirection: "column",
            height: 320,
            maxHeight: 400,
          }}
        >
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box display="flex" alignItems="center" gap={1}>
              {/* Spark icons at top */}
              <img src={SparkIcon} alt="spark" width={28} height={28} />

              <Box ml={1}>
                <Typography
                  sx={{ fontWeight: 500, fontSize: "17px", lineHeight: 1 }}
                >
                  AI resume builder
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#6C6880",
                    lineHeight: 2,
                  }}
                >
                  Transform your healthcare CV with AI.
                </Typography>
              </Box>
            </Box>

            <IconButton>
              <img src={LeftArrow} alt="arrow" width={40} height={40} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              //   background:
              //     "linear-gradient(135deg, rgba(245,250,232,1) 0%, rgba(250,245,255,1) 100%)",
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   boxShadow:
              //     "11px 11px 48.6px 0px rgba(0,0,0,0.05), inset 0px 0px 14.5px 4px rgba(255,255,255,0.64)",
            }}
          >
            {/* Profile image */}
            <Box
              component="img"
              src={ResumeUser}
              alt="resume user"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />

            {/* Right-side icons */}
            <Box
              sx={{
                position: "absolute",
                right: 54,
                top: "50%", // push to vertical center
                transform: "translateY(-50%)", // adjust to exact middle
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {[Icon1, Icon2, Icon3].map((icon, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={icon}
                    alt="action icon"
                    sx={{ width: 50, height: 50 }} // slightly bigger to match your ref
                  />
                </Box>
              ))}
            </Box>

            {/* Bottom search-like pill */}
            <Box
              sx={{
                position: "absolute",
                left: "5%",
                bottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 1.5,
                width: "70%",

                borderRadius: "50px",
                // background: "#DEE9CF82",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0px 6px 16px rgba(0,0,0,0.06), inset 0px 8px 14px rgba(255,255,255,0.7)",
              }}
            >
              {/* Spark Icon */}
              <Box
                component="img"
                src={SparkIconSearch}
                alt="spark search"
                sx={{ width: 18, height: 18 }}
              />

              {/* Separator line */}
              <Box
                sx={{
                  width: "1px",
                  height: 18,
                  backgroundColor: " #5D6371",
                }}
              />

              {/* Text */}
              <Typography
                sx={{
                  fontSize: 8,
                  color: "#6C6880",
                  fontWeight: 100,
                  lineHeight: 1,
                }}
              >
                You are a resume-building assistant that specializes in
                healthcare-related roles...
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
