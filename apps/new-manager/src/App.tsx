import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ManagerRoutes } from './routes';
import '../src/styles/style.css';
import CustomDialog from './components/CustomDialog';
import { Button } from '@chakra-ui/react';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <BrowserRouter>
      <ManagerRoutes />
      <Button onClick={handleOpenDialog}>Open Dialog</Button>
      <Button onClick={() => alert('hi')}>Open Dialog</Button>
      <CustomDialog
        isOpen={dialogOpen}
        onClose={handleCloseDialog}
        selectedCount={1}
      />
    </BrowserRouter>
  );
}

export default App;
