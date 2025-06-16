import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo from "../assets/3sLogo.webp";

import Step1 from "../assets/1.png";
import Step2 from "../assets/2.png";
import Step3 from "../assets/3.png";
import Step4 from "../assets/4.png";
import Step5 from "../assets/5.png";
import Step6 from "../assets/6.png";

import Terrace from "../assets/Terrace.jpeg";
import Sump from "../assets/Sump.jpeg";
import OHTank from "../assets/OHTank.jpeg";
// import Bathroom from "../assets/Bathroom.jpeg";
import SideWall from "../assets/SideWall.jpeg";
import InnerWall from "../assets/InnerWall.jpeg";
import CoolRoof from "../assets/CoolRoof.jpeg";
import CorrugatedRoofs from "../assets/CorrugatedRoofs.jpeg";

// SEO
import { Helmet } from "react-helmet";

const carouselImages = [
  { src: Terrace, label: "Terrace water proofing" },
  { src: Sump, label: "Sump leak arrest" },
  { src: OHTank, label: "OH tank leaks" },
  // { src: Bathroom, label: "Bathroom leaks" },
  { src: SideWall, label: "Side Wall leaks" },
  { src: InnerWall, label: "Inner Wall leaks" },
  { src: CoolRoof, label: "Cool roofs" },
  { src: CorrugatedRoofs, label: "Arresting leaks at corrugated roofs" },
];

const LandingImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "300px", // Adjusts the max width of the logo for larger screens
  height: "auto",
  display: "block",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "150px",
  },
}));

const Image = styled("img")({
  width: "70vw",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const CarouselImage = styled("img")(({ theme, isSmallScreen }) => ({
  width: isSmallScreen ? "10vh" : "auto",
  height: isSmallScreen ? "10vh" : "70vh",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
}));

const features = [
  {
    icon: "fas fa-users",
    name: "Experienced Team",
    description:
      "Our team consists of highly trained professionals with years of experience in waterproofing.",
  },
  {
    icon: "fas fa-check-circle",
    name: "Quality Products",
    description:
      "We use only the best materials and products to ensure long-lasting results for your waterproofing needs.",
  },
  {
    icon: "fas fa-clock",
    name: "Quick Completion",
    description:
      "We prioritize efficient work to complete your projects within the promised timeline without compromising quality.",
  },
];

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Helmet>
        <title>
          3S Waterproofing Solutions | Terrace, Bathroom & Wall Leak Repairs in
          Chennai
        </title>
        <meta
          name="description"
          content="3S Waterproofing Solutions is your one-stop waterproofing expert in Chennai, Tamil Nadu. We fix terrace, sump, bathroom, wall leaks, and more. Fast and reliable service!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3S Waterproofing Solutions" />
        <meta
          name="keywords"
          content="waterproofing Chennai, terrace waterproofing, sump leak repair, wall leak solution, bathroom waterproofing, cool roof coating, OH tank waterproofing"
        />

        {/* Open Graph Meta (for social media preview) */}
        <meta
          property="og:title"
          content="3S Waterproofing Solutions | Expert Leak Repairs in Chennai"
        />
        <meta
          property="og:description"
          content="We provide expert waterproofing for terrace, bathroom, sump, walls, and more. Trusted in Chennai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://3swaterproofing.com/" />
        <meta
          property="og:image"
          content="https://3swaterproofing.com/static/media/3sLogo.a03fe7c9d9e6b96b44c8.webp"
        />

        {/* Optional: Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3S Waterproofing Solutions" />
        <meta
          name="twitter:description"
          content="Professional waterproofing services in Chennai."
        />
        <meta
          name="twitter:image"
          content="https://3swaterproofing.com/static/media/3sLogo.a03fe7c9d9e6b96b44c8.webp"
        />
      </Helmet>
      <Box backgroundColor="" sx={{ padding: 4 }} mt={5} mb={5}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography
              color="#001F3F"
              variant="h4"
              component="h2"
              mb={2}
              gutterBottom
            >
              3S Water Proofing Solutions
            </Typography>
            <Typography color="#001F3F" mb={2} variant="body1">
              3S Water Proofing Solutions is your one-stop solution for all
              water leak issues, quickly becoming a leading and innovative
              waterproofing service provider in Chennai, Tamil Nadu. We
              specialize in terrace waterproofing, sump leak arrest, OH tank
              leaks, bathroom leak solutions, side wall leaks, inner wall leaks,
              and cool roof solutions. Our services ensure that your building
              remains safe and dry!
            </Typography>
            <Link className="Link quote" to="/contact">
              <button>Get a quote</button>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <LandingImage src={Logo} alt="Brand Logo" />
          </Grid>
        </Grid>
      </Box>

      {/* W H Y   C H O O S E   U S */}

      <Box
        mt={5}
        mb={5}
        sx={{
          backgroundColor: "#001F3F",
          color: "white",
          padding: isSmallScreen ? 4 : 6,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="#f9f9f9"
          display="block"
          mb={5}
        >
          Why choose us?
        </Typography>
        <Grid container spacing={isSmallScreen ? 2 : 4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index} textAlign="center">
              <Box mb={2} backgroundColor="transparent">
                <i className={feature.icon} style={{ fontSize: "3rem" }}></i>
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.name}
              </Typography>
              <Typography color="white" variant="body2">
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/*  S E R V I C E S    C A R O U S E L  */}

      <Box sx={{ padding: 2 }} mt={5} mb={5}>
        <Typography
          variant="bebasNeue"
          color="#001F3F"
          fontSize={{ md: 48, xs: 30 }}
          textAlign="left"
          fontWeight="bold"
          sx={{ lineHeight: isSmallScreen ? "1.0" : "normal" }}
          letterSpacing={2}
        >
          Overview of Services we provide
        </Typography>
        <Link to="/services">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <Box textAlign="center" key={index} padding={1} mt={2} mb={2}>
                <CarouselImage
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                />
                <Typography color="black" mt={5} variant="h3" gutterBottom>
                  {image.label}
                </Typography>
                <Box></Box>
              </Box>
            ))}
          </Slider>
        </Link>
      </Box>

      {/* O U R    P R O C E S S  */}

      {/* <Box bgcolor="#FFD700" textAlign="center" p={isSmallScreen ? 5 : 10}> */}
      <Box bgcolor="#9CAFAA" textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="#001F3F"
          display="block"
          mb={5}
        >
          Our process
        </Typography>

        {/*  S T E P  1 */}

        <Grid
          container
          mt={2}
          mb={2}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={4}>
            <Image
              src={Step1}
              alt="Dance image"
              style={{
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
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
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
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
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
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
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
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
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
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
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="#001F3F"
              display="block"
              mt={2}
              mb={5}
            >
              6. more coating if needed
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 40, xs: 30 }}
          color="#001F3F"
          display="block"
          // mb={5}
        >
          Now your buidling is ready to withstand any weather,<br></br>Heat or
          water
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
