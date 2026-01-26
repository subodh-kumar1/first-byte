const NonActiveTab = ({ children, setActiveIndex}) => (
  <button className="flex-1 py-2.5 text-orange-700 rounded-md font-medium text-sm" onClick={setActiveIndex}>
    {children}
  </button>
);
export default NonActiveTab;
