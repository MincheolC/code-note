import * as React from 'react';
import {Box, Container, Typography} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../styles/ContactSection.css';

type ContactSectionProps = {
  groomPhone: string,
  bridePhone: string,
  groomDadName: string,
  groomDadPhone: string,
  groomMomPhone: string,
  groomMomName: string,
  brideDadName: string,
  brideMomName: string,
  brideDadPhone: string,
  brideMomPhone: string,
}

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const {
    groomPhone,
    bridePhone,
    groomDadName,
    groomDadPhone,
    groomMomPhone,
    groomMomName,
    brideDadName,
    brideMomName,
    brideDadPhone,
    brideMomPhone,
  } = props;

  return (
    <Box>
      <Box sx={{height: "5vh"}}></Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "2vh"
      }}>
        <Typography className="contact-info" display="inline">신랑 측에 연락하기</Typography>
        <a href={`tel:${groomPhone}`}>
          <LocalPhoneIcon className="contact-icon"/>
        </a>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "2vh"
      }}>
        <Typography className="contact-info" display="inline">신부 측에 연락하기</Typography>
        <a href={`tel:${bridePhone}`}>
          <LocalPhoneIcon className="contact-icon"/>
        </a>
      </Box>
      <Box sx={{height: "5vh"}}></Box>
      <Box sx={{
        backgroundColor: "#BE9E7D"
      }}>
        <Typography sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2.5em",
          padding: "1.8vh"
        }}>혼주에게 전화하기</Typography>
      </Box>

      <Box sx={{height: "7vh"}}></Box>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
        }}>
          <Typography sx={{
            width: "100%",
            fontWeight: "bold",
            paddingBottom: "2vh"
          }}>신랑측 혼주</Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1vh"
          }}>
            <Typography className="contact-info" display="inline">아버지</Typography>
            <Typography className="contact-info" display="inline">{groomDadName}</Typography>
            <a href={`tel:${groomDadPhone}`}>
              <LocalPhoneIcon className="contact-icon"/>
            </a>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography className="contact-info" display="inline">어머니</Typography>
            <Typography className="contact-info" display="inline">{groomMomName}</Typography>
            <a href={`tel:${groomMomPhone}`}>
              <LocalPhoneIcon className="contact-icon"/>
            </a>
          </Box>
        </Box>
      </Box>

      <Box sx={{height: "8vh"}}></Box>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column"
        }}>
          <Typography sx={{
            width: "100%",
            fontWeight: "bold",
            paddingBottom: "2vh"
          }}>신부측 혼주</Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1vh"
          }}>
            <Typography className="contact-info" display="inline">아버지</Typography>
            <Typography className="contact-info" display="inline">{brideDadName}</Typography>
            <a href={`tel:${brideDadPhone}`}>
              <LocalPhoneIcon className="contact-icon"/>
            </a>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography className="contact-info" display="inline">어머니</Typography>
            <Typography className="contact-info" display="inline">{brideMomName}</Typography>
            <a href={`tel:${brideMomPhone}`}>
              <LocalPhoneIcon className="contact-icon"/>
            </a>
          </Box>
        </Box>
      </Box>
    
      <Box sx={{height: "8vh"}}></Box>
    </Box>
  );
}

export default ContactSection;