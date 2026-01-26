import { Search } from "lucide-react";

const SearchInput = ({ searchPlaceholder }) => (
  <div className="px-4 py-3 bg-white border-b border-orange-200">
    <div className="relative">
      <Search className="absolute left-3 top-3 w-5 h-5 text-orange-400" />
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="w-full pl-11 pr-4 py-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 text-base"
      />
    </div>
  </div>
);

export default SearchInput;
