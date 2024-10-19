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
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box bgcolor="#38434A" textAlign="center" p={isSmallScreen ? 5 : 7}>
        <Box backgroundColor="transparent" textAlign="left">
          <Typography
            variant="bebasNeue"
            color="#BFA57B"
            fontSize={{ md: 48, xs: 30 }}
            textAlign="left"
            fontWeight="bold"
            sx={{ lineHeight: isSmallScreen ? "1.0" : "normal" }}
            letterSpacing={2}
          >
            3s Water Proofing Solutions
          </Typography>
        </Box>
        {/* next line */}
        <Box mt={5} backgroundColor="transparent" textAlign="center">
          <Grid container spacing={5}>
            {/* First Column */}
            <Grid item xs={12} sm={3} mt={5}>
              <Box backgroundColor="transparent" textAlign="left">
                <Typography
                  textAlign="left"
                  display="block"
                  variant="bebasNeue"
                  color="#D9D9D9"
                  fontWeight={700}
                  letterSpacing={2}
                  fontSize={{ md: 30, xs: 25 }}
                >
                  About us
                </Typography>
                <Typography
                  textAlign="left"
                  variant="ptSerif"
                  fontWeight={700}
                  letterSpacing={1}
                  color="#BFA57B"
                  fontSize={{ md: 20, xs: 15 }}
                >
                  3S Water Proofing Solutions is your one-stop solution for all water leak issues, quickly becoming a leading and innovative waterproofing service provider in Chennai, Tamil Nadu.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={3} mt={5}>
              <Box backgroundColor="transparent" textAlign="left">
                <Stack backgroundColor="transparent" spacing={2}>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    display="block"
                    variant="bebasNeue"
                    color="#D9D9D9"
                    fontWeight={700}
                    letterSpacing={2}
                    fontSize={{ md: 30, xs: 25 }}
                  >
                    Services Provided
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Terrace water proofing
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="services">
                      Sump leak arrest
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      OH tank leak
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Bathroom leaks
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Side Wall leaks
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Inner wall leaks
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Cool roofs
                    </a>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            {/* Third Column */}
            <Grid item xs={12} sm={3} mt={5}>
              <Box backgroundColor="transparent" textAlign="center">
                <Stack backgroundColor="transparent" spacing={2}>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    display="block"
                    variant="bebasNeue"
                    color="#D9D9D9"
                    fontWeight={700}
                    letterSpacing={2}
                    fontSize={{ md: 30, xs: 25 }}
                  >
                    Quick Links
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/">
                      Home
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/services">
                      Services
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/gallery">
                      Gallery
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/contact">
                      Contact
                    </a>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            {/* Fourth Column */}
            <Grid item xs={12} sm={3} mt={5}>
              <Box backgroundColor="transparent" textAlign="center">
                <Stack backgroundColor="transparent" spacing={2}>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    display="block"
                    variant="bebasNeue"
                    color="#D9D9D9"
                    fontWeight={700}
                    letterSpacing={2}
                    fontSize={{ md: 30, xs: 25 }}
                  >
                    Contact Us
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="address1" target="_blank" href="https://maps.app.goo.gl/iQfL4Yh1EpnqGDS29">
                      <i class="fa-solid fa-location-dot fa-xl"></i> No. 14,
                      Vedavinayagar Street, Gandhi Nagar, Avadi, Chennai - 600054
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="mail1" href="mailto:3sbond1@gmail.com">
                      <i class="fa-solid fa-envelope fa-xl"></i>{" "}
                      example@email.com
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="phone1" href="tel:+91 98401 37762,">
                      <i class="fa-solid fa-phone fa-xl"></i>{" "}98401 37762,
                    </a>
                  </Typography>
                  <Typography
                    // textAlign={isSmallScreen ? "left" : "right"}
                    textAlign="left"
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="phone1" href="tel:+91  98406 97762,">
                      <i class="fa-solid fa-phone fa-xl"></i>{" "} 98406 97762,
                    </a>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* next line */}
        <Box backgroundColor="transparent" mt={7}  textAlign="center">
            <Typography
              textAlign={isSmallScreen ? "left" : "right"}
              variant="ptSerif"
              fontWeight={400}
              color="#f9f9f9"
              marginRight={1}
              fontSize={{ md: 15, xs: 10 }}
            >
              ©2024 3S Water Proofing Solutions, All Rights Reserved
            </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
