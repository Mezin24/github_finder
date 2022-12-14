import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:login' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
