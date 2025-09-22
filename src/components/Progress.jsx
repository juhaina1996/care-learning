import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  IconButton,
  LinearProgress,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BagIcon from "../assets/profileCompletion/bagIcon.png";
import LeftArrow from "../assets/profileCompletion/leftArrow.png";

const ProgressItem = ({ progress, title, date, gradientId, gradientStops }) => {
  // perimeter of the rounded square path
  const side = 44;
  const radius = 12;
  const perimeter = 4 * (side - 2 * radius) + 2 * Math.PI * radius;

  const strokeWidth = 4; // <-- thinner stroke

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 1,
        borderRadius: 3,
        // background: "#fff",
        boxShadow: "0px 4px 5.9px 0px #f4f4f4 inset",

        mb: 2,
      }}
    >
      {/* Progress rounded-square */}
      <Box sx={{ position: "relative" }}>
        <svg width="56" height="56" viewBox="0 0 56 56">
          <defs>
            {/* Dynamic gradient */}
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              {gradientStops.map((stop, idx) => (
                <stop key={idx} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>

          {/* Background rounded square */}
          <rect
            x="6"
            y="6"
            width="44"
            height="44"
            rx="12"
            ry="12"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />

          {/* Progress stroke with gradient */}
          <rect
            x="6"
            y="6"
            width="44"
            height="44"
            rx="12"
            ry="12"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={perimeter}
            strokeDashoffset={perimeter - (progress / 100) * perimeter}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage in center */}
        <Typography
          sx={{
            position: "absolute",
            top: "45%",
            left: "52%",
            transform: "translate(-50%, -50%)",
            fontWeight: 700,
            fontSize: 11,
            color: "#000",
          }}
        >
          {progress}%
        </Typography>
      </Box>

      {/* Text */}
      <Box flex={1} ml={1}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 9, color: "#5F5F5F" }}>
          Course start date: {date}
        </Typography>
      </Box>

      {/* Resume button */}
      <Button
        variant="contained"
        sx={{
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: 200,
          backgroundColor: "#2050E4",
          textTransform: "none",
          px: 3,
          "&:hover": { backgroundColor: "#254edb" },
        }}
      >
        Resume
      </Button>
    </Box>
  );
};

const StatsCard = ({ title, bigNumber, subtitle }) => (
  <Card
    sx={{
      p: 2,
      borderRadius: 4,
      background:
        "linear-gradient(135deg, rgba(249, 251, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
      boxShadow:
        "11px 11px 48.6px 0px #0000000D, 0px 0px 14.5px 4px #FFFFFFA3 inset", // Figma shadows
      flex: 1,
      minWidth: 310,
      height: 380,
    }}
  >
    {/* Header */}
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={5.2}
    >
      <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
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
          fontSize: 12,
          px: 2,
        }}
      >
        All
      </Button>
    </Box>

    {/* Main Stat */}
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: 2,
        borderRadius: 3,
        background: "#fff",
        mb: 6,
        boxShadow: "0px 4px 5.9px 0px #f4f4f4 inset",
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          <img src={BagIcon} alt="home" width={35} height={35} />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {bigNumber}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Box>

      <IconButton>
        <img src={LeftArrow} alt="arrow" width={40} height={40} />
      </IconButton>
    </Box>

    {/* Breakdown */}
    <Box display="flex" justifyContent="space-around">
      {/* Each block has fixed height */}
      {[
        { value: 20, label: "Application", barHeight: 18 },
        { value: 30, label: "in review", barHeight: 26 },
        { value: 43, label: "Interviews", barHeight: 34 },
      ].map((item, idx) => (
        <Box
          key={idx}
          textAlign="center"
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* Top number + label stay aligned */}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: 1,
              color: "#000",
            }}
          >
            {item.value}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontWeight: 300, fontSize: "11px", mb: 1 }}
          >
            {item.label}
          </Typography>

          {/* Bars grow DOWN from a fixed-height container */}
          <Box
            sx={{
              height: 40, // fixed container
              width: "75%",
              display: "flex",
              alignItems: "flex-end", // bar sticks to bottom
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: item.barHeight,
                width: "100%",
                // borderRadius: 2,
                background: "rgba(0,0,0,0.06)",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  </Card>
);

export default function DashboardSection() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        mt: 3,
      }}
    >
      {/* My Progress */}
      <Box sx={{ width: "33.3%" }}>
        <Card
          sx={{
            pt: 3,
            pb: 0,
            px: 3,
            borderRadius: 4,
            background: "linear-gradient(135deg, #f9fbff 0%, #ffffff 100%)",
            boxShadow: `
          11px 11px 48.6px 0px rgba(0, 0, 0, 0.05),
          0px 0px 14.5px 4px rgba(255, 255, 255, 0.64) inset
        `,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={5.2}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
              My Progress
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                borderColor: "rgba(0,0,0,0.1)",
                color: "#374151",
                fontSize: 12,
                px: 2,
              }}
            >
              All
            </Button>
          </Box>

          <ProgressItem
            progress={30}
            title="Food Safety & Hygiene"
            date="14 August, 2025"
            gradientId="grad1"
            gradientStops={[
              { offset: "0%", color: "#F27A00" },
              { offset: "200%", color: "#FBB637" },
            ]}
          />

          <ProgressItem
            progress={70}
            title="Professional Boundaries"
            date="14 August, 2025"
            gradientId="grad2"
            gradientStops={[
              { offset: "0%", color: "#00B273" },
              { offset: "100%", color: "#00F9C7" },
            ]}
          />

          <ProgressItem
            progress={50}
            title="Fire Safety"
            date="14 August, 2025"
            gradientId="grad3"
            gradientStops={[
              { offset: "0%", color: "#0095F2" },
              { offset: "100%", color: "#37B6FB" },
            ]}
          />
        </Card>
      </Box>

      {/* Stats */}
      <Box sx={{ width: "33.3%" }}>
        <StatsCard title="Steak" bigNumber={43} subtitle="Application Sent" />
      </Box>

      {/* Job Applications */}
      <Box sx={{ width: "33.3%" }}>
        <StatsCard
          title="Job Applications"
          bigNumber={43}
          subtitle="Application Sent"
        />
      </Box>
    </Box>
  );
}
