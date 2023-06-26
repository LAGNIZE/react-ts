import { React } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import NavBar from './components/UI/navbar/NavBar';
import PostId from './pages/PostId';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route exact path="/posts/:id" element={<PostId />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
