import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs";

const TabExample = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    </div>
  );
};

export default TabExample;
