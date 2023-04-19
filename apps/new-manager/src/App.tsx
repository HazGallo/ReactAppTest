import { Box } from '@chakra-ui/react';
import AppEngage from './components/AppEngage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<AppEngage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
