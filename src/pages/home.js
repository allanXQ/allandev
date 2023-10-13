import { Box, Chip, Typography, useTheme } from "@mui/material";
import React from "react";

// javascript,typescript, react, node, mongodb

const technologies = [
  {
    name: "Javascript",
    icon: "/imgs/javascript.png",
  },
  {
    name: "React.js",
    icon: "/imgs/react.png",
  },
  {
    name: "Node.js",
    icon: "/imgs/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/imgs/mongodb.svg",
  },
];

const colors = ["#8e24aa", "#3949ab", "#f4511e", "#43a047"];

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 130px)",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          //   width: "90vw",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "80px",
            fontWeight: 600,
          }}
        >
          Allan Juma
        </Typography>
        <Typography variant="h5">I turn ideas into products</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          {technologies.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors[index],

                borderRadius: 1,
                width: 90,
                height: 30,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.textColor.light,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
