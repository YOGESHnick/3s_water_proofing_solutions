import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
} from "@mui/material";

import Terrace from "../assets/Terrace.jpeg";
import Sump from "../assets/Sump.jpeg";
import OHTank from "../assets/OHTank.jpeg";
import Bathroom from "../assets/Bathroom.jpeg";
import SideWall from "../assets/SideWall.jpeg";
import InnerWall from "../assets/InnerWall.jpeg";
import CoolRoof from "../assets/CoolRoof.jpeg";

const Image = styled("img")(({ isSmallScreen }) => ({
  maxWidth: isSmallScreen ? "100%" : "500px",
  width: isSmallScreen ? "auto" : "auto",
  height: isSmallScreen ? "200px" : "50vh",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
}));

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
    {/* T E R R A C E  */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="" sx={{ padding: 4 }} mt={5} >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography
                color="#001F3F"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Terrace Water - Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#001F3F"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                src={Terrace}
                alt="Terrace water proofing image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* S U M P  */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="#001F3F" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
              <Image
                src={Sump}
                alt="Sump Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                color="#f9f9f9"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Sump Water - Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#f9f9f9"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* O H   T A N K  */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="#9CAFAA" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography
                color="#001F3F"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                OH Tank Water Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#001F3F"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                src={OHTank}
                alt="OHTank Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* B A T H R O O M */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Image
                src={Bathroom}
                alt="Bathroom Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                color="#001F3F"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Bathrooom Water - Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#001F3F"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* S I D E   W A L L S */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="#001F3F" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography
                color="#f9f9f9"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Side Wall Water - Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#f9f9f9"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                src={SideWall}
                alt="SideWall Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* I N N E R    W A L L S */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="#9CAFAA" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Image
                src={InnerWall}
                alt="InnerWall Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                color="#001F3F"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Inner Wall Water - Proofing
              </Typography>
              <Typography
                textAlign="left"
                color="#001F3F"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>

    {/* C O O L  R O O F S */}

      <Link to="/contact" className="enlarge">
        <Box backgroundColor="" sx={{ padding: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography
                color="#001F3F"
                variant="h4"
                component="h2"
                mb={5}
                gutterBottom
                textAlign="left"
              >
                Cool Roofing
              </Typography>
              <Typography
                textAlign="left"
                color="#001F3F"
                mb={2}
                variant="body1"
              >
                3S Water Proofing Solutions is your one-stop solution for all
                water leak issues, quickly becoming a leading and innovative
                waterproofing service provider in Chennai, Tamil Nadu. We
                specialize in terrace waterproofing, sump leak arrest, OH tank
                leaks, bathroom leak solutions, side wall leaks, inner wall
                leaks, and cool roof solutions. Our services ensure that your
                building remains safe and dry!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                src={CoolRoof}
                alt="CoolRoof Image"
                isSmallScreen={isSmallScreen}
              />
            </Grid>
          </Grid>
        </Box>
      </Link>
    </div>
  );
};

export default Services;
