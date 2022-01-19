import React from 'react';
import Home from '../Home/Home';
import RightSide from '../../components/RightSide/RightSidebar';
import TopBar from '../../components/Topbar/TopBar';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from './App.styled';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container>
          <GlobalStyle />
          <TopBar />
          <Navigation />
          <RightSide />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
