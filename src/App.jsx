import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardList from './components/CardList'
import Sidebar from './components/Sidebar'
import Mentor from './components/Mentors'
import Submit from './components/Submit'
import MenteeWrapper from './components/MenteeWrapper'
import ScrollToTopButton from './components/ScrollToTop'
import useScrollToTop from './hooks/useScrollToTop'

function AppContent() {
  useScrollToTop();
  
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/details/:name" element={<MenteeWrapper />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/submission-guide" element={<Submit />} />
        </Routes>
      </main>
      <ScrollToTopButton />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
