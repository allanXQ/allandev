import React from "react";
import ResponsiveDrawer from "../navbar";
import { Link, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const socials = [
  {
    name: "Github",
    icon: "/imgs/github.png",
    link: "https://www.github.com/allanXQ",
  },
  {
    name: "Linkedin",
    icon: "/imgs/linkedin.png",
    link: "http://www.linkedin.com/in/allan-juma",
  },
  {
    name: "Twitter",
    icon: "/imgs/twitter.png",
    link: "",
  },
  {
    name: "Gmail",
    icon: "/imgs/gmail.png",
    link: "allancjuma@gmail.com",
  },
  {
    name: "Whatsapp",
    icon: "/imgs/whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=2540748517525",
  },
];
const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {socials.map((item, index) =>
          item.name === "Gmail" || item.name === "Whatsapp" ? (
            <a
              key={index}
              href={
                item.name === "Gmail" ? `mailto:${item.link}` : `${item.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "2rem", height: "2rem" }}
              />
            </a>
          ) : (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "2rem", height: "2rem" }}
              />
            </Link>
          )
        )}
      </Box>
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        component="p"
      >
        {"© "}
        {new Date().getFullYear()}
        {" Allan Juma"}
      </Typography>
    </Box>
  );
};

const MainLayout = () => {
  return (
    <ResponsiveDrawer>
      <Outlet />
      <Footer />
    </ResponsiveDrawer>
  );
};

export default MainLayout;
