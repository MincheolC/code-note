import * as React from 'react';
import {Box, Typography} from '@mui/material';
import '../styles/InvitationSection.css';

type InvitationSectionProps = {
  contents: string[],
  groomDadName: string,
  groomMomName: string,
  groomChildNumberStr: string,
  groomName: string,
  brideDadName: string,
  brideMomName: string,
  brideChildNumberStr: string,
  brideName: string,
}

const InvitationSection: React.FC<InvitationSectionProps> = (props) => {
  const {
    contents,
    groomDadName,
    groomMomName,
    groomChildNumberStr,
    groomName,
    brideDadName,
    brideMomName,
    brideChildNumberStr,
    brideName,
  } = props;

  return (
    <Box>
      <Typography id="invitation-title">INVITATION</Typography>
      {contents.map(content => 
        <Typography id="invitation-content">{content}</Typography>)}
      <Box sx={{height: "5vh"}}></Box>
      <Box>
        <Typography display="inline" className="invitation-parent-name">{groomDadName}</Typography>
        <Typography display="inline" className="invitation-middle-dot"> · </Typography>
        <Typography display="inline" className="invitation-parent-name">{groomMomName}</Typography>
        <Typography display="inline" className="invitation-childnumber">의</Typography>
        <Typography display="inline" className="invitation-childnumber">{groomChildNumberStr}</Typography>
        <Typography display="inline" className="invitation-our-name">{groomName}</Typography>
      </Box>
      <Box>
        <Typography display="inline" className="invitation-parent-name">{brideDadName}</Typography>
        <Typography display="inline" className="invitation-middle-dot"> · </Typography>
        <Typography display="inline" className="invitation-parent-name">{brideMomName}</Typography>
        <Typography display="inline" className="invitation-childnumber">의</Typography>
        <Typography display="inline" className="invitation-childnumber">{brideChildNumberStr}</Typography>
        <Typography display="inline" className="invitation-our-name">{brideName}</Typography>
      </Box>
      <Box sx={{height: "9vh"}}></Box>
    </Box>
  );
}

export default InvitationSection;