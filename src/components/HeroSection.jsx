import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import ProjectsCard from "./ProjectsCard";
import ContactCard from "./ContactCard";

function HeroSection({ activePanel, setActivePanel }) {
  const hasActivePanel = activePanel !== "home";

  function handleMainButtonClick() {
    if (!hasActivePanel) {
      setActivePanel("about");
    } else if (activePanel === "about") {
      setActivePanel("skills");
    } else if (activePanel === "skills") {
      setActivePanel("projects");
    } else if (activePanel === "projects") {
      setActivePanel("contact");
    } else {
      setActivePanel("about");
    }
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: hasActivePanel ? "1fr 1.2fr" : "1fr",
            },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
            transition: "all 500ms ease",
          }}
        >
          <Box
            sx={{
              maxWidth: hasActivePanel ? 680 : 760,
              mx: hasActivePanel ? 0 : "auto",
              transform: hasActivePanel ? "translateX(-10px)" : "translateX(0)",
              transition: "all 500ms ease",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 1.5,
              }}
            >
              Software Engineering Portfolio
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                mt: 1,
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: { xs: "2.6rem", md: "4rem" },
              }}
            >
              Hi, I’m Qihang Feng.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: "text.secondary",
                lineHeight: 1.5,
              }}
            >
              MEng student building full stack applications and machine learning
              projects with React, FastAPI, PyTorch, and SQL.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              I focus on practical software development, reproducible machine
              learning workflows, data structures, and technical content that
              turns complex ideas into clear materials.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleMainButtonClick}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  width: { xs: "100%", sm: "fit-content" },
                }}
              >
                {hasActivePanel ? "Next" : "Start"}
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="/Qihang_Feng_Resume.pdf"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  width: { xs: "100%", sm: "fit-content" },
                }}
              >
                Download Resume
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 4,
                alignItems: "center",
              }}
            >
              <IconButton
                href="https://www.linkedin.com/in/qihang-feng-48bb72395/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>

              <IconButton
                href="https://github.com/QihangFeng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{ color: "#181717" }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>

              <IconButton
                href="https://www.youtube.com/@BeaverExplorers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                sx={{ color: "#FF0000" }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Box>

          {activePanel === "about" && <AboutCard />}
          {activePanel === "skills" && <SkillsCard />}
          {activePanel === "projects" && <ProjectsCard />}
          {activePanel === "contact" && <ContactCard />}
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
