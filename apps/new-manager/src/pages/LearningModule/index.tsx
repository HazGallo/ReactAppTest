import Navbar from './components/Navbar';
import Layout from './Layout';
import { Published } from "./components/Published"

export const LearningModule = () => {
  return (
    <Layout>
      <Navbar />
      <Published />
    </Layout>
  );
};
