import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function AboutCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
        height: "75vh",
        overflow: "auto",
        borderColor: "divider",
        backgroundColor: "#fafafa",
        animation: "cardPop 500ms ease forwards",
        "@keyframes cardPop": {
          "0%": {
            opacity: 0,
            transform: "translateX(40px) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0) scale(1)",
          },
        },
      }}
    >
      <Stack spacing={3}>
        {/* Header */}
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-around", alignItems: "center" }}
        >
          <Avatar
            sx={{
              width: 150,
              height: 150,
              fontSize: 44,
              fontWeight: 800,
              bgcolor: "primary.main",
            }}
          >
            QF
          </Avatar>

          <Box sx={{ width: "65%" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Qihang Feng
            </Typography>

            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <LocationOnIcon />
              <Typography color="text.secondary">
                Edmonton, AB, Canada
              </Typography>
            </Stack>

            <Typography color="text.secondary" sx={{ mt: 1, ml: 0.6}}>
              Software Engineering MEng Student
            </Typography>

            <Typography color="text.secondary" sx={{ml: 0.6}}>
              Expected Graduation, May 2027
            </Typography>
          </Box>
        </Stack>

        <Divider />

        {/* Technical Experience */}
        <Box>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mb: 1.5, alignItems: "center" }}
          >
            <WorkIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Technical Experience
            </Typography>
          </Stack>

          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "white",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h6">
              Data Assistant, Campus AI Pilot Program
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apr 2023 - Jul 2023
            </Typography>
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <LocationOnIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2" color="text.secondary">
                Nanjing University of Posts and Telecommunications, China
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 1.5, lineHeight: 1.5 }}
            >
              Reviewed model outputs, corrected labels, automated validation
              checks with Python, and documented reproducible issues for
              follow-up analysis.
            </Typography>
          </Box>
        </Box>

        {/* Education */}
        <Box>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mb: 1.5, alignItems: "center" }}
          >
            <SchoolIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Education
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6">
                M.Eng. in Electrical and Computer Engineering
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Sep 2025 - Present
              </Typography>

              <Typography variant="body2" color="text.secondary">
                University of Alberta, Edmonton, AB, Canada
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Specialization in Software Engineering and Intelligent Systems
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6">
                B.Eng. in Internet of Things Engineering
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Sep 2019 - Jun 2023
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Nanjing University of Posts and Telecommunications, China
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default AboutCard;
