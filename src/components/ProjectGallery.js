import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from '@mui/material';

const ProjectGallery = ({ images, title }) => {
  return (
    <div>
      {title && (
        <Typography
          variant="ptSerif"
          textAlign="center"
          fontSize={{ md: 30, xs: 18 }}
          color="#001F3F"
          sx={{ marginBottom: 2 }}
          fontWeight={700}
          display="block"
        >
          {title}
        </Typography>
      )}
      <Grid container spacing={2} mb={5}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to="/services">
            <Box
              component="img"
              src={image}
              alt={`Gallery Image ${index + 1}`}
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectGallery;