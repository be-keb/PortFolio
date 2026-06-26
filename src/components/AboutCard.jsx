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
            MY
          </Avatar>

          <Box sx={{ width: "65%" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Muhammd Yahya
            </Typography>

            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <LocationOnIcon />
              <Typography color="text.secondary">
                Islamabad Pakistan
              </Typography>
            </Stack>

            <Typography color="text.secondary" sx={{ mt: 1, ml: 0.6}}>
              CyberSecurity Student
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
            
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Me
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
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 1.5, lineHeight: 1.5 }}
            >
             I'm Muhammd Yahya, a 15 year old student and cybersecurity enthusiast from Pakistan. What started as curiosity quickly became a long-term mission: to build projects, master cybersecurity, and earn opportunities to travel the world and compete in hackathons.

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
              Current Focus
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

              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                • Full-Stack Development <br />
                • Cybersecurity <br />
                • AI & Machine Learning <br />
                • Open Source <br />
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
              <Typography variant="body2" color="text.secondary">
                • Travel the world through HACKATHONS (for free) <br />
                • Become a professional Red Teamer <br />
                • Build Open Source Projects <br />
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default AboutCard;
