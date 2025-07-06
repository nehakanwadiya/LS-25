import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Sidebar from './components/Sidebar';
import Mentor from './components/Mentors';
import Submit from './components/Submit';
import MenteeWrapper from './components/MenteeWrapper';
import ScrollToTopButton from './components/ScrollToTop';
import useScrollToTop from './hooks/useScrollToTop';

function AppContent() {
  useScrollToTop();

  return (
    <>
      <Sidebar />
      <main className="main-content">
        {/* 🌟 Project Showcase Banner */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '32px', color: '#ff6b81', marginBottom: '5px' }}>
            "WebCraft Project"
          </h1>
          <p style={{ fontSize: '16px', color: '#444' }}>
            🚀 Presenting <strong>SplitNow+</strong> – A stylish, one-tap expense splitter for your gang trips, chai breaks & more!
          </p>
        </div>

        {/* All Routes Below */}
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/details/:name" element={<MenteeWrapper />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/submission-guide" element={<Submit />} />
        </Routes>
      </main>
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
