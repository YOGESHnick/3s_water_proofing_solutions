import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assets/3sLogo.webp";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box textAlign="center" p={10} paddingRight={isSmallScreen ? 10 : 20}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
            <Image
              src={Logo}
              alt="Natarajar image"
              style={{
                width: isSmallScreen ? "80%" : "90%",
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              action="https://formsubmit.co/manipathi786@gmail.com" method="POST" >
              <Typography
                variant="bebasNeue"
                fontSize={{ md: 48, xs: 30 }}
                color="#001F3F"
                display="block"
              >
                LEAVE US A MESSAGE
              </Typography>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              ></input>
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                id="phone"
                name="phone"
                placeholder="Phone no."
              ></input>
              <textarea
                id="Query"
                rows="4"
                name="Query"
                placeholder="Little information about your leak issues..." 
              ></textarea>
              <button type="submit">
                <SendIcon sx={{ backgroundColor: "transparent" }} />
                Send
              </button>
            </form>
          </Grid>
        </Grid>
      </Box>

      {/* A D D R E S S  */}

      <Box bgcolor="#001F3F" textAlign="center" p={isSmallScreen?2:10}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="white"
              textAlign="center"
              display="block"
            >
              Address
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="center"
              fontSize={{ md: 20, xs: 18 }}
              color="#D9D9D9"
              sx={{ marginBottom: 2 }}
              fontWeight={700}
              display="block"
            >
              No. 14, Vedavinayagar Street, <br />
              Gandhi Nagar, Avadi, <br />
              Chennai - 600054
            </Typography>

            <Typography
              mt={2}
              variant="ptSerif"
              textAlign="center"
              fontSize={{ md: 20, xs: 18 }}
              color="#f9f9f9"
              fontWeight={700}
              sx={{ marginBottom: 2 }}
              display="block"
            >
              <a className="phone1" href="tel:+91 98401 37762,">
                <i class="fa-solid fa-phone fa-xl"></i>{" "}98401 37762
              </a>
            </Typography>
            <Typography
              mt={2}
              variant="ptSerif"
              textAlign="center"
              fontSize={{ md: 20, xs: 18 }}
              color="#f9f9f9"
              fontWeight={700}
              sx={{ marginBottom: 2 }}
              display="block"
            >
              <a className="phone1" href="tel:+91  98406 97762,">
                <i class="fa-solid fa-phone fa-xl"></i>{" "} 98406 97762
              </a>
            </Typography>

          </Grid>
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
            <iframe title="Branch 2" width="100%" height="400px" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.629721708265!2d80.0922471!3d13.120875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d3549c274f%3A0x6dd02145cd456f43!2s14%2C%20Vedavinayagar%20St%2C%20Gandhi%20Nagar%2C%20Avadi%2C%20Tamil%20Nadu%20600054!5e0!3m2!1sen!2sin!4v1729394171758!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;