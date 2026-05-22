import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BuildIcon from "@mui/icons-material/Build";

function SkillsCard() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <CodeIcon />,
      skills: ["React", "JavaScript", "Material UI", "HTML", "CSS"],
    },
    {
      title: "Backend and Database",
      icon: <StorageIcon />,
      skills: ["FastAPI", "Python", "SQL", "REST APIs", "Data Processing"],
    },
    {
      title: "Machine Learning",
      icon: <PsychologyIcon />,
      skills: ["PyTorch", "scikit-learn", "Model Evaluation", "Explainable AI"],
    },
    {
      title: "Tools and Practices",
      icon: <BuildIcon />,
      skills: ["Git", "GitHub", "Testing", "Documentation", "Modular Design"],
    },
  ];

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
        <Box>
          <Typography variant="h4" fontWeight={800}>
            Skills
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
            A practical stack for building full stack applications, machine
            learning projects, and reproducible software workflows.
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2.5}>
          {skillGroups.map((group) => (
            <Box
              key={group.title}
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 250ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {group.icon}
                </Box>

                <Typography variant="h6" fontWeight={700}>
                  {group.title}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                sx={{ mt: 2 }}
              >
                {group.skills.map((skill) => (
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
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default SkillsCard;