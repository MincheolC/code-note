import * as React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../styles/GallerySection.css';

type GallerySectionProps = {
  imageUrls: string[],
}

const GallerySection: React.FC<GallerySectionProps> = (props) => {
  const {
    imageUrls,
  } = props;

  return (
    <Box>
      <Typography id="gallery-title">GALLERY</Typography>
      <Box sx={{height: "7vh"}}></Box>
      <Carousel
        autoPlay={false}
        animation="slide"
      >
        {
          imageUrls.map((url, i) => 
          (<Box 
            key={i} 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "650px"
            }}>
              <img className="gallery-image" src={url}></img>
            </Box>) )
        }
      </Carousel>
      <Box sx={{height: "9vh"}}></Box>
    </Box>
  );
}

export default GallerySection;