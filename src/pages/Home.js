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
import Step1 from "../assets/1.png";
import Step2 from "../assets/2.png";
import Step3 from "../assets/3.png";
import Step4 from "../assets/4.png";
import Step5 from "../assets/5.png";
import Step6 from "../assets/6.png";

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

      {/* O U R    P R O C E S S  */}

      <Box bgcolor="#FFD700" textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          Our process
        </Typography>

          {/*  S T E P  1 */}
          
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Image
              src={Step1}
              alt="Dance image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              1. Surface cleaning
            </Typography>
          </Grid>

          {/*  S T E P  2 */}
          
          <Grid item xs={12} md={4}>
            <Image
              src={Step2}
              alt="Dance image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              2. Crack filling
            </Typography>
          </Grid>

          {/*  S T E P  3 */}
          
          <Grid item xs={12} md={4}>
            <Image
              src={Step3}
              alt="Dance image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              3. Waterproof Priming
            </Typography>
          </Grid>

          {/*  S T E P  4 */}

          <Grid item xs={12} md={4}>
            <Image
              src={Step4}
              alt="Drawing image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              4. Laying mesh 
            </Typography>
          </Grid>
          {/*  S T E P  5 */}

          <Grid item xs={12} md={4}>
            <Image
              src={Step5}
              alt="Drawing image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              5. first coating
            </Typography>
          </Grid>
          {/*  S T E P  6 */}

          <Grid item xs={12} md={4}>
            <Image
              src={Step6}
              alt="Drawing image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              6. more coating if needed
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