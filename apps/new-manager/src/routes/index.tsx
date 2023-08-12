import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoadingLearning } from 'src/pages/LoadingLearning';
import Login from 'src/pages/Login';
import Layout from '../../src/pages/PathStudio/Layout';

import { LearningModule } from '../../src/pages/LearningModule';

const PathStudio = lazy(() => import('src/pages/PathStudio'));

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/learning/module" element={<LearningModule />} />

      <Route
        path="/learning/studio"
        element={
          <Suspense
            fallback={<LoadingLearning typeAnimacion="courseloading" />}
          >
            <Layout>
              <PathStudio />
            </Layout>
          </Suspense>
        }
      />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
