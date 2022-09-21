import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { AuthContextProvider } from './context/authContext';

import { Box } from '@mui/material';
import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Blog from './pages/Blog';
import BlogDetail from './components/BlogDetail';
import { BlogContextProvider } from './context/blogContext';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    // sx={{ width: { xl: '1488px' } }}
    <Box m='auto'>
      <BrowserRouter>
        <AuthContextProvider>
          <BlogContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/exercise/:id' element={<ExerciseDetail />} />
              <Route path='/blogs' element={<Blog />} />
              <Route path='/blogs/create' element={<CreateBlog />} />
              <Route path='/blogs/:id' element={<BlogDetail />} />
            </Routes>
            <Footer />
          </BlogContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
