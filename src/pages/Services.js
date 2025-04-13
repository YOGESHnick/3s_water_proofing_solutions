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
// import Bathroom from "../assets/Bathroom.jpeg";
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
        <Box backgroundColor="" sx={{ padding: 4 }} mt={5}>
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
                Terrace waterproofing ensures 100% long-lasting protection
                against leaks and water damage. Our expert team provides
                seamless solutions to keep your terrace completely dry and
                secure.
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
                We offer professional sump tank waterproofing in Chennai,
                ensuring leak-free water storage. Our team thoroughly inspects
                your tank to identify issues and provides effective,
                budget-friendly solutions to protect your property and maintain
                structural integrity.
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
                Our advanced OH tank waterproofing solutions use cutting-edge
                technology and premium materials to ensure a leak-proof
                structure. Choose from a range of finishes that provide lasting
                protection and meet the highest industry standards.
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

      {/* B A T H R O O M

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
                Protect your home from bathroom leaks with our specialized
                waterproofing services in Chennai. Our tailored solutions ensure
                durability and safeguard your floors and walls from future water
                damage.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link> */}

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
                Shield your property from moisture damage with our expert side
                wall waterproofing services. Our team uses advanced techniques
                and high-quality materials to create a reliable barrier against
                water intrusion, ensuring the longevity of your structure and
                your peace of mind.
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
                Protect your interiors from dampness with our professional inner
                wall waterproofing services. We utilize cutting-edge solutions
                and premium materials to prevent moisture infiltration,
                safeguarding your home and enhancing its durability for years to
                come.
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
                Transform your building with our premium cool roofing solutions.
                Designed to combat heat and ensure a comfortable indoor
                environment, our expert services provide a durable and effective
                barrier against the elements, enhancing the longevity of your
                roof.
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
