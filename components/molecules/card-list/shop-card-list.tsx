import { Store } from "lucide-react";
import Card from "../card";
import CardHeading from "@/components/atoms/headings/card-heading";
import ShopCardContent from "../shop-card-content";
import DefaultChip from "@/components/atoms/chips/default-chip";

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
const ShopCardList = ({
    nearbyShops,
    freeDelivery
}) => {
    return <div className="flex-1 overflow-auto px-4 py-3">
        <div className="text-sm text-orange-800 mb-3 font-medium">
          {nearbyShops}
        </div>
        <div className="space-y-3">
          {shops.map((shop) => (
            <Card key={shop.id}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardHeading heading={shop.name} subheading={shop.nameHindi} />
                  <ShopCardContent distance={shop.distance} deliveryTime={shop.deliveryTime} />
                  <DefaultChip>{freeDelivery}</DefaultChip>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
}

export default ShopCardList;