import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();
  const currentTheme = theme.mode;

  //   const currentpath = useLocation().pathname;

  const navlinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contacts",
      path: "/contacts",
    },
  ];

  const drawer = (
    <Box>
      <List>
        {navlinks.map((item, index) => (
          <Box key={index}>
            <ListItem button component={Link} to={item.path}>
              <ListItemText>
                <Typography variant="body1">{item.name}</Typography>
              </ListItemText>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor:
          currentTheme === "light"
            ? theme.palette.bgColor.light
            : theme.palette.bgColor.dark,
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          //   backgroundColor:
          //     currentTheme === "light"
          //       ? theme.palette.bgColor.light
          //       : theme.palette.bgColor.dark,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          ></Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          mt: 20,
          //   width: { xs: drawerWidth, sm: 0 },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              pt: 6.9,
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:
                currentTheme === "light"
                  ? theme.palette.bgColor.light
                  : theme.palette.bgColor.dark,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          overflowX: "hidden",
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
