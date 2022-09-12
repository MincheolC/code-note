import * as React from 'react';
import {Box, Typography} from '@mui/material';
import moment from 'moment';
import '../styles/MainImageSection.css';

require('moment/locale/ko');

type MainImageSectionProps = {
  mainImageUrl: string,
  brideName: string,
  groomName: string,
  weddingDate: Date,
  location: string
}

const MainImageSection: React.FC<MainImageSectionProps> = (props) => {
  const {
    mainImageUrl,
    brideName,
    groomName,
    weddingDate,
    location
  } = props;

  const kstWeddingDate = moment(weddingDate);
  const yyyyMMdd = kstWeddingDate.format('yyyy. MM. DD');
  const hhmmss = kstWeddingDate.format('dddd a hh시 mm분');

  return (
    <Box
      sx={{
        position: "relative"
      }}>
      <img id="main-image" src={mainImageUrl}></img>
      <Box sx={{
        position: "absolute",
        top: "57%",
        // textAlign: "center",
        // verticalAlign: "middle",
        width: "100%",
        left: "0%",
      }}>
        <Typography id="main-image-yyyyMMdd">{yyyyMMdd}</Typography>
        <Typography id="main-image-groomName">{groomName}</Typography>
        <Typography id="main-image-brideName">{brideName}</Typography>
        <Typography id="main-image-hhmmss">{hhmmss}</Typography>
        <Typography id="main-image-location">{location}</Typography>
      </Box>
    </Box>
  );
}

export default MainImageSection;