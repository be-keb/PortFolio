import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WebIcon from "@mui/icons-material/Web";

function ProjectsCard() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      type: "Frontend Development",
      icon: <WebIcon />,
      description:
        "Built and deployed an interactive portfolio website with React, Vite, and Material UI, featuring animated card navigation, responsive layout, and a working contact form.",
      tech: ["React", "Vite", "Material UI", "GitHub Pages", "Web3Forms"],
      link: "https://github.com/QihangFeng/portfolio",
    },
    {
      title: "Reliable LIME under Query Budget Constraints",
      type: "Explainable AI",
      icon: <PsychologyIcon />,
      description:
        "Built a budget sweep pipeline for LIME image explanations and designed a coarse to fine budget allocation strategy to improve faithfulness under low query budgets.",
      tech: ["Python", "LIME", "XAI", "Evaluation", "scikit-learn"],
      link: "https://github.com/QihangFeng/Reliable-LIME-under-Query-Budget-Constraints",
    },
    {
      title: "Object Placement Localization in Street Scenes",
      type: "Computer Vision",
      icon: <ImageSearchIcon />,
      description:
        "Built a text guided computer vision pipeline for object placement in street scenes, improving validation localization performance with candidate generation, neural ranking, and ablation studies.",
      tech: ["Python", "PyTorch", "Computer Vision", "Cityscapes"],
      link: "https://github.com/QihangFeng/Object-Placement-Localization-in-Street-Scenes",
    },
    {
      title: "Rust Balanced Trees",
      type: "Data Structures",
      icon: <AccountTreeIcon />,
      description:
        "Implemented AVL Tree and Red Black Tree in Rust with reusable generic abstractions, shared rotation logic, an interactive CLI, and Criterion benchmarks.",
      tech: ["Rust", "AVL Tree", "Red Black Tree", "Benchmarking"],
      link: "https://github.com/QihangFeng/Rust-Balanced-Trees",
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
        maxHeight: { md: "75vh" },
        overflowY: "auto",
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
            Projects
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.5 }}>
            Selected projects covering frontend development, explainable AI,
            computer vision, and data structure implementation.
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2.5}>
          {projects.map((project) => (
            <Paper
              key={project.title}
              elevation={0}
              sx={{
                p: 2.5,
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
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {project.icon}
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight={800}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="primary.main">
                      {project.type}
                    </Typography>
                  </Box>
                </Stack>

                <Typography color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {project.tech.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </Stack>

                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 0,
                  }}
                >
                  View on GitHub
                </Button>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default ProjectsCard;
