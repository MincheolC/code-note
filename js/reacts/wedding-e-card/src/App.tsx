import React from 'react';
import Container from '@mui/material/Container';
import MainImageSection from './components/MainImageSection';
import InvitationSection from './components/InvitationSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const state = {
    mainImageUrl: "/mainImg.jpeg",
    groom: {
      shortName: "민철",
      name: "차민철",
      phone: "010-6647-0203",
      dadName: "차국찬",
      dadPhone: "010-9053-5275",
      momName: "김단옥",
      momPhone: "010-3253-5276",
      childNumberStr: "장남"
    },
    bride: {
      shortName: "지나",
      name: "GINA CHAN",
      phone: "010-2352-1023",
      dadName: "SAM CHAN",
      dadPhone: "",
      momName: "MANDY LAU",
      momPhone: "",
      childNumberStr: "삼녀"
    },
    weddingDate: new Date("2022-10-22T18:30:00+09:00"),
    location: "라온제나분당 그랜드홀 (8층)",
    contents: [
      "새로운 마음과 새 의미를 간직하며",
      "저희 두 사람이",
      "새 출발의 첫걸음을 내딛습니다.",
      "좋은 꿈, 바른 뜻으로",
      "올바르게 살 수 있도록",
      "축복과 격려 주시면",
      "더없는 기쁨으로 간직하겠습니다."
    ],

  }

  return (
    <div className="App">
      <Container 
        maxWidth="sm"
        sx={{padding: 0}}>
        <MainImageSection 
          mainImageUrl={state.mainImageUrl}
          groomName={state.groom.shortName}
          brideName={state.bride.shortName}
          weddingDate={state.weddingDate}
          location={state.location}
        />
        <InvitationSection 
          contents={state.contents}
          groomDadName={state.groom.dadName}
          groomMomName={state.groom.momName}
          groomChildNumberStr={state.groom.childNumberStr}
          groomName={state.groom.name}
          brideDadName={state.bride.dadName}
          brideMomName={state.bride.momName}
          brideChildNumberStr={state.bride.childNumberStr}
          brideName={state.bride.name}
          />
        <ContactSection 
          groomPhone={state.groom.phone}
          bridePhone={state.bride.phone}
          groomDadName={state.groom.dadName}
          groomDadPhone={state.groom.dadPhone}
          groomMomPhone={state.groom.momPhone}
          groomMomName={state.groom.momName}
          brideDadName={state.bride.dadName}
          brideMomName={state.bride.momName}
          brideDadPhone={state.bride.dadPhone}
          brideMomPhone={state.bride.momPhone}
          />
      </Container>
    </div>
  );
}

export default App;
