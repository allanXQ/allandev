import { Grid, ThemeProvider, createTheme, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/mainLayout";

const theme = createTheme({
  mode: "dark",
  palette: {
    bgColor: {
      light: "#fff",
      dark: "#000",
    },
    textColor: {
      light: "#000",
      dark: "#fff",
    },
  },
});

theme.palette.background.default = "#000";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
