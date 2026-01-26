import ActiveTab from "@/components/atoms/tabs/active-tab";
import NonActiveTab from "@/components/atoms/tabs/non-active-tab";

const TabList = ({ tabs, activeTabIndex, setActiveTabIndex }) => {
  return (
    <div className="sticky px-4 py-3 bg-white border-b border-orange-200">
      <div className="flex gap-2 p-1 bg-amber-100 rounded-lg">
        {tabs?.map((tab: String, idx) => {
          return idx === activeTabIndex ? (
            <ActiveTab key={idx}>{tab}</ActiveTab>
          ) : (
            <NonActiveTab key={idx} setActiveIndex={() => setActiveTabIndex(idx)}>{tab}</NonActiveTab>
          );
        })}
      </div>
    </div>
  );
};

export default TabList;
