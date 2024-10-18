import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
  Stack,
} from "@mui/material";
// import Intro from "../assets/Intro.png";
// import Hero from "../assets/Hero.png";
// import Hero2 from "../assets/Hero2.png";
// import DanceLogo from "../assets/DanceLogo.png";
// import DrawingLogo from "../assets/DrawingLogo.png";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>

      {/* W H A T   W E   P R O V I D E */}

      <Box bgcolor="#FFD700" textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          WHAT WE PROVIDE?
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Image
              // src={DanceLogo}
              alt="DanceLogo image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              BHARATHANATYAM
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              // src={DrawingLogo}
              alt="DrawingLogo image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              DRAWING
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          // mb={5}
        >
          Learn the best of these fine arts
        </Typography>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          From the best
        </Typography>
        <Box
          textAlign="center"
          backgroundColor="transparent"
          justifyContent="center"
          px={isSmallScreen ? 1 : 20}
        >
          <Typography
            variant="ptSerif"
            textAlign="center"
            fontSize={{ md: 25, xs: 22 }}
            color="black"
            sx={{ marginBottom: 2 }}
            display="block"
            fontWeight="bold"
          >
            Learn the best of the skills, from us at Sri Megala Kalaikudam.
          </Typography>
          <Typography
            variant="ptSerif"
            textAlign="center"
            fontSize={{ md: 25, xs: 22 }}
            color="black"
            sx={{ marginBottom: 2 }}
            display="block"
            fontWeight="bold"
          >
            We operate at two centers and different times too! Choose the most
            appropriate one and join us!
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;