import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./pages/home";

const theme = createTheme({
  mode: "light",
  palette: {
    bgColor: {
      light: "#fff",
      dark: "#000",
    },
    textColor: {
      light: "#fff",
      dark: "#000",
    },
  },
});

// theme.palette.background.default = "#000";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/blog" element={<h1>Blog</h1>} />
            <Route path="/projects" element={<h1>Projects</h1>} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
