import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { MainPage } from './pages/MainPage/MainPage';
import { ContentDescriptionPage } from './pages/ContentDescriptionPage/ContentDescriptionPage';
import { QueuePage } from './pages/QueuePage/QueuePage';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/content/:id" element={<ContentDescriptionPage />} />
          <Route path="/queue/" element={<QueuePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
