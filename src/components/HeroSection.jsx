import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          {/* LEFT COLUMN: Hero Content */}
          <Box
            sx={{
              maxWidth: hasActivePanel ? 680 : 760,
              mx: hasActivePanel ? 0 : "auto",
              transform: hasActivePanel ? "translateX(-10px)" : "translateX(0)",
              transition: "all 500ms ease",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems="center"
              sx={{
                width: "100%",
              }}
            >
              <Avatar
                src="/fav_crop.jpg"
                alt="me"
                sx={{
                  width: 180,
                  height: 180,
                  border: "5px solid #1976d2",
                  boxShadow:
                    "0 0 20px rgba(25,118,210,.4), 0 0 60px rgba(25,118,210,.2)",
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    letterSpacing: 1.5,
                  }}
                >
                  CyberSec Portfolio
                </Typography>

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    mt: 1,
                    fontWeight: 800,
                  }}
                >
                  Hi, I'm Beak.
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 2,
                    color: "text.secondary",
                    lineHeight: 1.5,
                  }}
                >
                  A 15 year old CyberSec student building projects to earn my way around the world
                  <br />
                  <span style={{ fontWeight: 500 }}>
                    Developer • Builder • Future Red Teamer
                  </span>
                </Typography>

                {/* Buttons & Social Icons */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleMainButtonClick}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {hasActivePanel ? "Next" : "Start"}
                  </Button>

                  <IconButton
                    href="https://github.com/be-akverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    href="https://discord.com/users/1202612158722998275"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127.14 96.36"
                      width="28"
                      height="28"
                      fill="currentColor"
                    >
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S53.86,46,53.71,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.23,65.69,84.69,65.69Z" />
                    </svg>
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT COLUMN: Panel Cards */}
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