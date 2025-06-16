import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProjectGallery from "../components/ProjectGallery";

import P1_1 from "../assets/Project1/1.jpeg";
import P1_2 from "../assets/Project1/2.JPG";
import P1_3 from "../assets/Project1/3.JPG";
import P1_4 from "../assets/Project1/4.JPG";
import P1_5 from "../assets/Project1/5.JPG";
import P1_6 from "../assets/Project1/6.JPG";

import P2_1 from "../assets/Project2/1.jpeg";
import P2_2 from "../assets/Project2/2.JPG";
import P2_3 from "../assets/Project2/3.JPG";
import P2_4 from "../assets/Project2/4.JPG";
import P2_5 from "../assets/Project2/5.JPG";
import P2_6 from "../assets/Project2/6.JPG";

import P3_1 from "../assets/Project3/1.jpeg";
import P3_2 from "../assets/Project3/2.JPG";
import P3_3 from "../assets/Project3/3.JPG";
import P3_4 from "../assets/Project3/4.JPG";
import P3_5 from "../assets/Project3/5.JPG";

import P4_1 from "../assets/Project4/1.jpeg";
import P4_2 from "../assets/Project4/2.JPG";
import P4_3 from "../assets/Project4/3.JPG";
import P4_4 from "../assets/Project4/4.JPG";
import P4_5 from "../assets/Project4/5.JPG";

import P5_1 from "../assets/Project5/1.jpeg";
import P5_2 from "../assets/Project5/2.JPG";
import P5_3 from "../assets/Project5/3.JPG";
import P5_4 from "../assets/Project5/4.JPG";
import P5_5 from "../assets/Project5/5.JPG";
import P5_6 from "../assets/Project5/6.JPG";
import P5_7 from "../assets/Project5/7.JPG";
import P5_8 from "../assets/Project5/8.JPG";
import P5_9 from "../assets/Project5/9.JPG";

import P6_1 from "../assets/Project6/1.jpeg";
import P6_2 from "../assets/Project6/2.JPG";
import P6_3 from "../assets/Project6/3.JPG";
import P6_4 from "../assets/Project6/4.JPG";
import P6_5 from "../assets/Project6/5.JPG";

import P7_1 from "../assets/Project7/1.jpeg";
import P7_2 from "../assets/Project7/2.JPG";
import P7_3 from "../assets/Project7/3.JPG";
import P7_4 from "../assets/Project7/4.JPG";
import P7_5 from "../assets/Project7/5.JPG";

import P8_1 from "../assets/Project8/1.jpeg";
import P8_2 from "../assets/Project8/2.JPG";
import P8_3 from "../assets/Project8/3.JPG";
import P8_4 from "../assets/Project8/4.JPG";
import P8_5 from "../assets/Project8/5.JPG";
import P8_6 from "../assets/Project8/6.JPG";

import P9_0 from "../assets/Project9/0.JPG";
import P9_1 from "../assets/Project9/1.JPG";
import P9_2 from "../assets/Project9/2.JPG";
import P9_3 from "../assets/Project9/3.JPG";
import P9_4 from "../assets/Project9/4.JPG";
import P9_5 from "../assets/Project9/5.JPG";
import P9_6 from "../assets/Project9/5.JPG";
import P9_7 from "../assets/Project9/5.JPG";

import P10_1 from "../assets/Project10/1.jpeg";
import P10_2 from "../assets/Project10/2.JPG";
import P10_3 from "../assets/Project10/3.JPG";
import P10_4 from "../assets/Project10/4.JPG";
import P10_5 from "../assets/Project10/5.JPG";

import P11_0 from "../assets/Project11/0.JPG";
import P11_1 from "../assets/Project11/1.jpeg";
import P11_2 from "../assets/Project11/2.JPG";
import P11_3 from "../assets/Project11/3.JPG";
import P11_4 from "../assets/Project11/4.JPG";
import P11_5 from "../assets/Project11/5.jpeg";
import P11_6 from "../assets/Project11/6.jpeg";
import P11_7 from "../assets/Project11/7.jpeg";

import P12_1 from "../assets/Project12/1.jpeg";
import P12_2 from "../assets/Project12/2.JPG";
import P12_3 from "../assets/Project12/3.JPG";
import P12_4 from "../assets/Project12/4.JPG";
import P12_5 from "../assets/Project12/5.JPG";
import P12_6 from "../assets/Project12/6.JPG";

import P13_1 from "../assets/Project13/1.jpeg";
import P13_2 from "../assets/Project13/2.jpeg";
import P13_3 from "../assets/Project13/3.jpeg";
import P13_4 from "../assets/Project13/4.jpeg";
import P13_5 from "../assets/Project13/5.jpeg";

import P14_1 from "../assets/Project14/1.jpeg";
import P14_2 from "../assets/Project14/2.jpeg";
import P14_3 from "../assets/Project14/3.jpeg";
import P14_4 from "../assets/Project14/4.jpeg";
import P14_5 from "../assets/Project14/5.jpeg";
import P14_6 from "../assets/Project14/6.jpeg";

import P15_1 from "../assets/Project15/1.jpeg";
import P15_2 from "../assets/Project15/2.jpeg";
import P15_3 from "../assets/Project15/3.jpeg";
import P15_4 from "../assets/Project15/4.jpeg";
import P15_5 from "../assets/Project15/5.jpeg";
import P15_6 from "../assets/Project15/6.jpeg";

import P16_1 from "../assets/Project16/1.jpeg";
import P16_2 from "../assets/Project16/2.jpeg";
import P16_3 from "../assets/Project16/3.jpeg";
import P16_4 from "../assets/Project16/4.jpeg";
import P16_5 from "../assets/Project16/5.jpeg";
import P16_6 from "../assets/Project16/6.jpeg";

import P17_1 from "../assets/Project17/1.jpeg";
import P17_2 from "../assets/Project17/2.jpeg";
import P17_3 from "../assets/Project17/3.jpeg";
import P17_4 from "../assets/Project17/4.jpeg";
import P17_5 from "../assets/Project17/5.jpeg";
import P17_6 from "../assets/Project17/6.jpeg";

import P18_1 from "../assets/Project18/1.jpeg";
import P18_2 from "../assets/Project18/2.jpeg";
import P18_3 from "../assets/Project18/3.jpeg";
import P18_4 from "../assets/Project18/4.jpeg";
import P18_5 from "../assets/Project18/5.jpeg";
import P18_6 from "../assets/Project18/6.jpeg";
import P18_7 from "../assets/Project18/7.jpeg";
import P18_8 from "../assets/Project18/8.jpeg";

import P19_1 from "../assets/Project19/1.jpeg";
import P19_2 from "../assets/Project19/2.jpeg";
import P19_3 from "../assets/Project19/3.jpeg";
import P19_4 from "../assets/Project19/4.jpeg";
import P19_5 from "../assets/Project19/5.jpeg";
import P19_6 from "../assets/Project19/6.jpeg";

// SEO
import { Helmet } from "react-helmet";

const project1Images = [P1_1, P1_2, P1_3, P1_4, P1_5, P1_6];
const project2Images = [P2_1, P2_2, P2_3, P2_4, P2_5, P2_6];
const project3Images = [P3_1, P3_2, P3_3, P3_4, P3_5];
const project4Images = [P4_1, P4_2, P4_3, P4_4, P4_5];
const project5Images = [P5_1, P5_2, P5_3, P5_4, P5_5, P5_6, P5_7, P5_8, P5_9];
const project6Images = [P6_1, P6_2, P6_3, P6_4, P6_5];
const project7Images = [P7_1, P7_2, P7_3, P7_4, P7_5];
const project8Images = [P8_1, P8_2, P8_3, P8_4, P8_5, P8_6];
const project9Images = [P9_0, P9_1, P9_2, P9_3, P9_4, P9_5, P9_6, P9_7];
const project10Images = [P10_1, P10_2, P10_3, P10_4, P10_5];
const project11Images = [
  P11_0,
  P11_1,
  P11_2,
  P11_3,
  P11_4,
  P11_5,
  P11_6,
  P11_7,
];
const project12Images = [P12_1, P12_2, P12_3, P12_4, P12_5, P12_6];
const project13Images = [P13_1, P13_2, P13_3, P13_4, P13_5];
const project14Images = [P14_1, P14_2, P14_3, P14_4, P14_5, P14_6];
const project15Images = [P15_1, P15_2, P15_3, P15_4, P15_5, P15_6];
const project16Images = [P16_1, P16_2, P16_3, P16_4, P16_5, P16_6];
const project17Images = [P17_1, P17_2, P17_3, P17_4, P17_5, P17_6];
const project18Images = [
  P18_1,
  P18_2,
  P18_3,
  P18_4,
  P18_5,
  P18_6,
  P18_7,
  P18_8,
];
const project19Images = [P19_1, P19_2, P19_3, P19_4, P19_5, P19_6];

const Gallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Helmet>
        <title>
          Our Projects | Construction & Waterproofing Works in Tamil Nadu
        </title>
        <meta
          name="description"
          content="Explore a gallery of completed projects including homes, schools, churches, and factories across Chennai, Ambattur, Pondicherry, and more. We specialize in waterproofing, leak arrest, and civil engineering work."
        />
        <meta
          name="keywords"
          content="construction projects, waterproofing, leak arrest, civil works, Chennai, Pondicherry, Ambattur, churches, factories, homes, project gallery"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Projects | Civil Engineering & Waterproofing Specialists"
        />
        <meta
          property="og:description"
          content="Browse our completed construction and waterproofing projects. Quality civil work for homes, churches, schools, and factories across Tamil Nadu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://3swaterproofing.com/gallery" />
        <meta
          property="og:image"
          content="https://3swaterproofing.com/static/media/6.69342b542e47a938bf88.JPG"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://3swaterproofing.com/gallery" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Projects | Civil Engineering & Waterproofing Specialists"
        />
        <meta
          name="twitter:description"
          content="See how we transformed buildings and spaces through quality civil and waterproofing work."
        />
        <meta
          name="twitter:image"
          content="https://3swaterproofing.com/static/media/6.69342b542e47a938bf88.JPG"
        />
        {/* <meta name="twitter:site" content="@yourTwitterHandle" /> */}
        {/* <meta name="twitter:creator" content="@yourTwitterHandle" /> */}
      </Helmet>

      {/* <Link to="/contact"> */}
      <Box
        backgroundColor="transparent"
        p={isSmallScreen ? 0 : 5}
        paddingBottom={isSmallScreen ? 2 : 0}
      >
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="#001F3F"
          display="block"
        >
          Our projects
        </Typography>
        <Box
          p={isSmallScreen ? 2 : 5}
          paddingBottom={isSmallScreen ? 2 : 0}
          mb={10}
        >
          <ProjectGallery images={project1Images} title="House in Ambattur" />
          <ProjectGallery
            images={project2Images}
            title="Factory in Pondicherry"
          />
          <ProjectGallery
            images={project3Images}
            title="Nazerath Academy - Avadi"
          />
          <ProjectGallery
            images={project4Images}
            title="Good shepherd church - Pattabiram"
          />
          <ProjectGallery
            images={project5Images}
            title="Factory in Tirubuvanai"
          />
          <ProjectGallery
            images={project6Images}
            title="Water tank leak arrest"
          />
          <ProjectGallery images={project7Images} title="House at Vasarpadi" />
          <ProjectGallery
            images={project8Images}
            title="Nazareth school - Avadi"
          />
          <ProjectGallery
            images={project9Images}
            title="ECI church Head office"
          />
          <ProjectGallery
            images={project10Images}
            title="Poclain Hydraulics Factory"
          />
          <ProjectGallery
            images={project11Images}
            title="Factory water drain line water proofing work"
          />
          <ProjectGallery
            images={project12Images}
            title="House in Pattabiram"
          />
          <ProjectGallery
            images={project13Images}
            title="House in Madipakkam"
          />
          <ProjectGallery
            images={project14Images}
            title="SS Bala Flats - Ambattur"
          />
          <ProjectGallery
            images={project15Images}
            title="Billy Graham chapel Kilpauk"
          />
          <ProjectGallery
            images={project16Images}
            title="SU camp site - Mahabalipuram"
          />
          <ProjectGallery images={project17Images} title="SU - Guest house" />
          <ProjectGallery
            images={project18Images}
            title="Ruby Flats Paint work"
          />
          <ProjectGallery
            images={project19Images}
            title="Arresting leaks at corrugated roofs"
          />
        </Box>
      </Box>
      {/* </Link> */}
    </div>
  );
};

export default Gallery;
