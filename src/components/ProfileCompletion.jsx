import React from "react";
import { Box, Avatar, Typography, Chip, IconButton } from "@mui/material";

// adjust paths to your actual assets in /profileCompletion
import Blob1 from "../assets/profileCompletion/background.png";
// import Blob2 from "../assets/profileCompletion/blob2.png";
import AvatarImage from "../assets/profileCompletion/Squircle Mask.png";
import NurseIcon from "../assets/profileCompletion/verify.png";
import DocumentIcon from "../assets/profileCompletion/attachsquare.png";
import CvIcon from "../assets/profileCompletion/enhance-user-ai.png";
import JobsIcon from "../assets/profileCompletion/enhance-user-ai.png";
import ArrowIcon from "../assets/profileCompletion/leftArrow.png";

export default function ProfileCompletion() {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        // background: "linear-gradient(135deg, #f9fbff 0%, #ffffff 100%)",
        // boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <Box
        component="img"
        src={Blob1}
        alt="blob1"
        sx={{
          position: "absolute",
          right: -40,
          top: -47,
          width: 370,
          opacity: 0.9,
        }}
      />
      {/* <Box
        component="img"
        src={Blob2}
        alt="blob2"
        sx={{
          position: "absolute",
          right: 60,
          bottom: -30,
          width: 220,
          opacity: 0.7,
        }}
      /> */}

      {/* Header section */}
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Avatar
          src={AvatarImage}
          sx={{ width: 64, height: 64, borderRadius: "0" }}
        />
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
            Complete your profile!
          </Typography>
          <Typography sx={{ fontWeight: 100, fontSize: 13 }}>
            Update profile and get new opportunities
          </Typography>
        </Box>
      </Box>

      {/* Progress marker */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
          ml: 10,
          zIndex: 3,
        }}
      >
        <Typography
          sx={{
            background: "#9FAFC7",
            color: "#fff",
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 600,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #7489c4",
            },
          }}
        >
          30% Completed
        </Typography>

        {/* vertical connector line */}
        <Box
          sx={{
            position: "absolute",
            bottom: -13, // extended to reach tracker
            left: "15%",
            transform: "translateX(-50%)",
            width: "1px",
            height: "6px",
            backgroundColor: "#9FAFC7",
            zIndex: 2,
          }}
        />
      </Box>

      {/* Step tracker */}
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 99,
          background:
            "linear-gradient(90deg, rgba(176, 188, 207, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)", // Safari
          boxShadow: "0px 0px 15.2px 1px rgba(255, 255, 255, 1) inset",
          px: 3,
          py: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* horizontal baseline */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "10%",
            width: "20%",
            height: "0px",
            border: "1px solid transparent",
            borderImageSource:
              "linear-gradient(90deg, rgba(32, 80, 228, 0) 0%, #2050E4 48.08%, rgba(32, 80, 228, 0) 100%)",
            borderImageSlice: 1,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          display="flex"
          justifyContent="space-between"
          flex={1}
          position="relative"
          zIndex={2}
        >
          {/* Nurse */}
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ minWidth: 140 }}
          >
            <Box
              component="img"
              src={NurseIcon}
              alt="nurse"
              sx={{ width: 32, height: 32 }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Nurse
              </Typography>
              <Typography variant="caption" color="text.secondary">
                General info
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.7)",
              mx: 2,
            }}
          />

          {/* Documents */}
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ minWidth: 140, opacity: 0.8 }}
          >
            <Box
              component="img"
              src={DocumentIcon}
              alt="documents"
              sx={{ width: 28, height: 28 }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Documents
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Upload
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.7)",
              mx: 2,
            }}
          />

          {/* CV */}
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ minWidth: 140, opacity: 0.8 }}
          >
            <Box
              component="img"
              src={CvIcon}
              alt="cv"
              sx={{ width: 28, height: 28 }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                CV{" "}
                <Box
                  component="span"
                  sx={{
                    // ml: 1,
                    fontSize: 12,
                    padding: "2px 4px",
                    color: "white",
                    borderRadius: "10px",
                    marginTop: "-3px",

                    fontWeight: 700,
                    background: "#FF0048",
                  }}
                >
                  40%
                </Box>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Job Applications
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.7)",
              mx: 2,
            }}
          />

          {/* Jobs */}
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ minWidth: 140, opacity: 0.8 }}
          >
            <Box
              component="img"
              src={JobsIcon}
              alt="jobs"
              sx={{ width: 28, height: 28 }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Jobs{" "}
                <Box
                  component="span"
                  sx={{
                    // color: "#ef4444",
                    fontWeight: 700,
                    fontSize: 12,
                    padding: "2px 4px",
                    color: "white",
                    borderRadius: "10px",
                    marginTop: "-3px",

                    background: "#FF0048",
                  }}
                >
                  2
                </Box>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Applications
              </Typography>
            </Box>
          </Box>
        </Box>
        <IconButton>
          <img src={ArrowIcon} alt="arrow" width={40} height={40} />
        </IconButton>
      </Box>
    </Box>
  );
}
