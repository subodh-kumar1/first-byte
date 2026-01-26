"use client";
import TabList from "@/components/molecules/tab-list";
import { useState } from "react";

const TabBody = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <TabList
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <div>
        {tabs[activeTabIndex]}
      </div>
    </>
  );
};
export default TabBody;
