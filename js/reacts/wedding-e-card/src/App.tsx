import React from 'react';
import Container from '@mui/material/Container';
import MainImageSection from './components/MainImageSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container 
        maxWidth="sm"
        sx={{padding: 0}}>
        <MainImageSection 
          mainImageUrl="/mainImg.jpeg"
          groomName="민철"
          brideName="지나"
          weddingDate={new Date("2022-10-22T18:30:00+09:00")}
          location="라온제나분당 그랜드홀 (8층)"
        />
      </Container>
    </div>
  );
}

export default App;
