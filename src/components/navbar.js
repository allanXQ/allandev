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
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();
  const currentTheme = theme.mode;

  //   const currentpath = useLocation().pathname;

  const navlinks = [
    {
      name: "Home",
      path: "/Home",
    },
    {
      name: "About Me",
      path: "/About",
    },
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "Projects",
      path: "/Projects",
    },
    {
      name: "Contacts",
      path: "/Contacts",
      badge: 4,
    },
  ];

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {navlinks.map((item, index) => (
          <Box key={index}>
            <ListItem
              button
              onClick={() => item.submenu && handleSubMenuToggle(index)}
              component={!item.submenu && Link}
              to={item.path}
            >
              <ListItemIcon
                sx={{
                  minWidth: 35,
                }}
              >
                {item.icon}
              </ListItemIcon>
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor:
            currentTheme === "light"
              ? theme.palette.bgColor.light
              : theme.palette.bgColor.dark,
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
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:
                currentTheme === "light"
                  ? theme.palette.bgColor.light
                  : theme.palette.bgColor.dark,
            },
          }}
          open
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
        <Toolbar sx={{}} />
        {props.children}
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
