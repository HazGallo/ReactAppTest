import { useState, memo } from 'react';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import { Contents } from './components/Tabs/Contents';
import { PathExperience } from './components/Tabs/PathExperience';
import { Test } from './components/Tabs/Test';
import TestQuestions from './components/Tabs/TestQuestions';
import Layout from './Layout';

export default memo(function PathStudio() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Layout>
      {/* Note: Lazy in tab produce problem with route-fallback */}
      <Tabs m="0px" p="0px" index={tabIndex} onChange={handleTabsChange}>
        <Navbar tabIndex={tabIndex} />

        <TabPanels m="0px" p="0px">
          <TabPanel m="0px" p="0px">
            <PathExperience />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <Contents />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <TestQuestions />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <Test />
          </TabPanel>
          <TabPanel m="0px" p="0px">
            <Test />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
});
