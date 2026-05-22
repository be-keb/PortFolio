import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function AboutCard() {
  const skills = ["React", "FastAPI", "PyTorch", "SQL", "Rust", "Git"];

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
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

        <Box>
          <Typography variant="h4" fontWeight={700}>
            Qihang Feng
          </Typography>

          <Typography sx={{ mt: 1 }}>
            MEng in Electrical and Computer Engineering
          </Typography>

          <Typography color="text.secondary">University of Alberta</Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
            About
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            I am a software engineering MEng student focused on full stack
            development, machine learning projects, data structures, and
            reproducible technical work.
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
            Core Skills
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              />
            ))}
          </Stack>
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
            Currently building a personal resume website with React and Material
            UI.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default AboutCard;
