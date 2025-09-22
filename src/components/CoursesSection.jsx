import { Box, Card, Typography, Button, IconButton } from "@mui/material";
// import CourseImage from "../assets/spotLightSection/resume-user.png";
import ArrowIcon from "../assets/profileCompletion/leftArrow.png";
import CourseImage from "../assets/spotLightSection/course-image.png";

const SectionCard = ({ title }) => {
  const items = [1, 2, 3]; // dummy data

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background:
          "linear-gradient(135deg, rgba(249, 251, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        boxShadow:
          "11px 11px 48.6px 0px #0000000D, 0px 0px 14.5px 4px #FFFFFFA3 inset",
        flex: 1,
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
          {title}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            borderColor: "rgba(0,0,0,0.1)",
            color: "#374151",
            fontSize: 11,
            fontWeight: 300,
            px: 2,
          }}
        >
          All
        </Button>
      </Box>

      {/* Items */}
      {items.map((_, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            p: 1,
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0px 4px 5.9px 0px #f8f8f8 inset;",
          }}
        >
          {/* Left: Image + text */}
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src={CourseImage}
              alt="course"
              style={{
                width: 50,
                height: 50,
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                Professional Boundaries
              </Typography>
              <Typography sx={{ fontSize: 10, color: "text.secondary" }}>
                Course start date: 14 August, 2025
              </Typography>
            </Box>
          </Box>

          {/* Right: Arrow Icon */}
          <IconButton>
            <img src={ArrowIcon} alt="arrow" width={40} height={40} />
          </IconButton>
        </Box>
      ))}
    </Card>
  );
};

export default function CoursesSection() {
  return (
    <Box display="flex" gap={3} mt={3}>
      <SectionCard title="Recently viewed" />
      <SectionCard title="Top trending" />
      <SectionCard title="News & updates" />
    </Box>
  );
}
