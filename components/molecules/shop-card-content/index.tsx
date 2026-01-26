import { MapPin } from "lucide-react";

const ShopCardContent = ({ distance, deliveryTime }) => (
  <div className="flex items-center gap-4 text-xs text-orange-700">
    <span className="flex items-center gap-1">
      <MapPin className="w-3 h-3" />
      {distance}
    </span>
    <span>{deliveryTime}</span>
  </div>
);

export default ShopCardContent;
