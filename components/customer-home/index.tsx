import useConstants from "@/custom-hook/useConstants";
import { Search, MapPin, Store } from "lucide-react";
import LocationDetector from "@/components/location-detector";

interface Shop {
  id: number;
  name: string;
  nameHindi: string;
  distance: string;
  deliveryTime: string;
  category: string;
}

const shops: Shop[] = [
  {
    id: 1,
    name: "Gupta Kirana Store",
    nameHindi: "गुप्ता किराना स्टोर",
    distance: "0.8 km",
    deliveryTime: "15-20 min",
    category: "Groceries",
  },
  {
    id: 2,
    name: "Sharma General Store",
    nameHindi: "शर्मा जनरल स्टोर",
    distance: "1.2 km",
    deliveryTime: "20-25 min",
    category: "Groceries",
  },
  {
    id: 3,
    name: "Yadav Provision Store",
    nameHindi: "यादव प्रोविजन स्टोर",
    distance: "1.5 km",
    deliveryTime: "25-30 min",
    category: "Groceries",
  },
  {
    id: 4,
    name: "Singh Kirana",
    nameHindi: "सिंह किराना",
    distance: "0.5 km",
    deliveryTime: "10-15 min",
    category: "Groceries",
  },
  {
    id: 5,
    name: "Kumar Store",
    nameHindi: "कुमार स्टोर",
    distance: "1.8 km",
    deliveryTime: "25-30 min",
    category: "Groceries",
  },
];

export async function CustomerHome() {
  const {
        heading,
        searchPlaceholder,
        deliveryTab,
        pickupTab,
        nearbyShops,
        freeDelivery
    } = await useConstants({customerType: "customerHome"});
  return (
    <div className="flex flex-col h-full bg-amber-50">
      {/* Header */}
      
      <div className="bg-orange-600 text-white px-4 py-5 shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5" />
          <div>
            <div className="text-xs opacity-90">
              {heading}
            </div>
            {/* <div className="font-semibold">Gaya, Bihar</div> */} {/* Dynamic */}
            <LocationDetector />
          </div>
        </div>
      </div>

      {/* Search Bar */}
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

      {/* Toggle */}
      <div className="px-4 py-3 bg-white border-b border-orange-200">
        <div className="flex gap-2 p-1 bg-amber-100 rounded-lg">
          <button className="flex-1 py-2.5 bg-orange-600 text-white rounded-md font-medium text-sm shadow-sm">
            {deliveryTab}
          </button>
          <button className="flex-1 py-2.5 text-orange-700 rounded-md font-medium text-sm">
            {pickupTab}
          </button>
        </div>
      </div>

      {/* Shop List */}
      <div className="flex-1 overflow-auto px-4 py-3">
        <div className="text-sm text-orange-800 mb-3 font-medium">
          {nearbyShops}
        </div>
        <div className="space-y-3">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 active:bg-orange-50"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-orange-900">
                    {shop.name}
                  </div>
                  <div className="text-sm text-orange-600 mb-2">
                    {shop.nameHindi}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-orange-700">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {shop.distance}
                    </span>
                    <span>{shop.deliveryTime}</span>
                  </div>
                  <div className="mt-2 inline-block px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    {freeDelivery}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
