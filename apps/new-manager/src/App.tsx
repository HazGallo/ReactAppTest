import './translations/i18n';

import { BrowserRouter } from 'react-router-dom';
import { ManagerRoutes } from './routes';
import '../src/styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}

export default App;
