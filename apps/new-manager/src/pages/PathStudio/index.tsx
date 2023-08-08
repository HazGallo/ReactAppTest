import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import { Contents } from './components/Tabs/Contents';
import { PathExperience } from './components/Tabs/PathExperience';
import { Test } from './components/Tabs/Test';
import Layout from './Layout';

export default function PathStudio() {
  return (
    <Layout>
      <Tabs isLazy m="0px" p="0px">
        <Navbar />
        <TabPanels m="0px" p="0px">
          <TabPanel m="0px" p="0px">
            <PathExperience />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <Contents />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <Test />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
