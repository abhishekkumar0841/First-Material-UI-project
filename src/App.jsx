import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState("light");

  const dartTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={dartTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
