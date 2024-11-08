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
import { SelectionPage } from './pages/SelectionPage/SelectionPage';
import WebSocketRequest from './request/WebSocketRequest';



function App() {
  const baseUrl = process.env.REACT_APP_BACKEND

  const url = `${baseUrl}/something/${id}`;

  const handleWebSocketOpen = () => {
    console.log('Подкючение открыто');
  };
    
  const handleWebSocketMessage = (message) => {
    try {
      setData(JSON.parse(message)); 
      console.log('Полученные данные:', data);
      } catch (error) {
        console.error('Ошибка при парсинге данных:', error);
    }
  };
    
  const handleWebSocketClose = () => {
    console.log('Подключение закрыто');
  };
    
  const handleWebSocketError = (error) => {
    console.error('Ошибка:', error);
  };
    
  <WebSocketRequest
    url={url}
    type="GET"
    onOpen={handleWebSocketOpen}
    onMessage={handleWebSocketMessage}
    onClose={handleWebSocketClose}
    onError={handleWebSocketError}
  />

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/selection/" element={<SelectionPage data={data} />}/>
          {data ?? data.map((el) => (
            <Route path={"/vr/" + el.id} element={<MainPage />} />
          ))}
          <Route path="/content/:id" element={<ContentDescriptionPage />} />
          <Route path="/queue/" element={<QueuePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
