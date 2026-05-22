import { useState } from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  const [activePanel, setActivePanel] = useState("home");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header activePanel={activePanel} setActivePanel={setActivePanel} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeroSection
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
