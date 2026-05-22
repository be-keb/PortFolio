import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

function Header({ activePanel, setActivePanel }) {
  const navItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ];
  const buttonWidth = 96;
  const gap = 24;
  const activeIndex = navItems.findIndex((item) => item.value === activePanel);
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "white",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: `${gap}px`,
              alignSelf: "stretch",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: `${buttonWidth}px`,
                height: "44px",
                borderRadius: 2,
                backgroundColor: "primary.main",
                transform: `translateX(${activeIndex * (buttonWidth + gap)}px)`,
                transition: "transform 300ms ease",
                zIndex: 0,
              }}
            />
            {navItems.map((item) => {
              return (
                <Button
                  key={item.value}
                  onClick={() => setActivePanel(item.value)}
                  sx={{
                    width: `${buttonWidth}px`,
                    height: "44px",
                    px: 2,
                    zIndex: 1,
                    color:
                      activePanel === item.value ? "white" : "text.primary",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Arial, sans-serif",
                    fontStyle: "normal",
                    borderRadius: 2,
                    transition: "color 250ms ease",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
