import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/home';
import PageRender from './routes/PageRender';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/:page' element={<PageRender/>} />
          <Route exact path='/:page/:slug' element={<PageRender/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
