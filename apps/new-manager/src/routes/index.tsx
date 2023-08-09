import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ExampleReactTable from 'src/components/table/ExampleReactTable';
import { LoadingPath } from 'src/pages/PathStudio/components/LoadingPath';
import Login from 'src/pages/Login';
import Layout from '../../src/pages/PathStudio/Layout';

import { LearningModule } from '../../src/pages/LearningModule';


const PathStudio = lazy(() => import('src/pages/PathStudio'));

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/learning/studio" replace />} />

      <Route
        path="/learning/studio"
        element={
          <Suspense fallback={<LoadingPath />}>
            <Layout>
              <PathStudio />
            </Layout>
          </Suspense>
        }
      />

<Route path="/learning/module" element={<LearningModule />} />

      
      <Route path="/login" element={<Login />} />
      <Route path="/table" element={<ExampleReactTable />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
