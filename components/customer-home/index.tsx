import useConstants from "@/custom-hook/useConstants";
import { MapPin } from "lucide-react";
import Header from "../molecules/header";
import DeliveringToHeading from "../atoms/headings/delivering-to-heading";
import SearchInput from "../atoms/inputs/search-input";
import TabBody from "../organisms/tab-body";
import ShopCardList from "../molecules/card-list/shop-card-list";
// import LocationDetector from "@/components/location-detector";


export async function CustomerHome() {
  const {
    heading,
    searchPlaceholder,
    deliveryTab,
    pickupTab,
    nearbyShops,
    freeDelivery,
  } = await useConstants({ customerType: "customerHome" });
  return (
    <div className="flex flex-col h-full bg-amber-50">
      {/* Header */}
      <Header
        Icon={MapPin}
        heading={heading}
        subheading={"Dwarka"}
        HeadingComponent={DeliveringToHeading}
      />

      {/* Search Bar */}
      <SearchInput searchPlaceholder={searchPlaceholder} />

      {/* Toggle */}
      <TabBody tabs={[deliveryTab, pickupTab]} />
      {/* Shop List */}
      <ShopCardList nearbyShops={nearbyShops} freeDelivery={freeDelivery} />
    </div>
  );
}
