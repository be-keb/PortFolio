import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import WebIcon from "@mui/icons-material/Web";

function SkillsCard() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <WebIcon />,
      skills: ["HTML", "CSS", "TypeScript", "Material UI"],
    },
    {
      title: "Backend Development",
      icon: <DnsIcon />,
      skills: ["Node.js", "REST APIs", "FastAPI"],
    },
    {
      title: "Databases",
      icon: <StorageIcon />,
      skills: ["SQL", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cyber Security",
      icon: <PsychologyIcon />,
      skills: ["Linux", "Networking", "OWASP Top 10", "Wire Shark", "Nmap"],
    },
    {
      title: "Programming Foundations",
      icon: <TerminalIcon />,
      skills: ["Python", "C"],
    },
    {
      title: "Tools and Workflow",
      icon: <BuildIcon />,
      skills: ["Git", "GitHub", "VS Code"],
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
        height: { md: "75vh" },
        overflowY: "auto",
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
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Technical Skills
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.5 }}>
            A practical technical stack for building web projects
             and cybersecurity tools.
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

                <Typography variant="h6">{group.title}</Typography>
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
