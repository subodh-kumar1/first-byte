'use client';
import { ArrowLeft, MapPin, Clock, Phone, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  nameHindi: string;
  price: number;
  unit: string;
}

const items: Item[] = [
  { id: 1, name: "Rice", nameHindi: "चावल", price: 60, unit: "kg" },
  { id: 2, name: "Wheat Flour", nameHindi: "आटा", price: 45, unit: "kg" },
  { id: 3, name: "Toor Dal", nameHindi: "तूर दाल", price: 120, unit: "kg" },
  { id: 4, name: "Sugar", nameHindi: "चीनी", price: 50, unit: "kg" },
  { id: 5, name: "Cooking Oil", nameHindi: "खाद्य तेल", price: 180, unit: "L" },
  { id: 6, name: "Tea Powder", nameHindi: "चाय पत्ती", price: 200, unit: "500g" },
];

export function ShopDetails() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newValue };
    });
  };

  return (
    <div className="flex flex-col h-full bg-amber-50">
      {/* Header */}
      <div className="bg-orange-600 text-white px-4 py-4 shadow-md">
        <div className="flex items-center gap-3 mb-3">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <div className="font-semibold text-lg">Gupta Kirana Store</div>
            <div className="text-sm opacity-90">गुप्ता किराना स्टोर</div>
          </div>
        </div>
      </div>

      {/* Shop Info */}
      <div className="bg-white px-4 py-4 border-b border-orange-200">
        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-sm text-orange-700">
              <MapPin className="w-4 h-4" />
              <span>0.8 km away • Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-orange-700">
              <Clock className="w-4 h-4" />
              <span>Open 7AM - 10PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-orange-700">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="text-sm text-green-800 font-medium">
            ✓ Free Delivery within 2 km / 2 किमी के भीतर मुफ़्त डिलीवरी
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-auto px-4 py-3">
        <div className="text-sm text-orange-800 mb-3 font-medium">
          Available Items / उपलब्ध सामान
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-orange-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-orange-900">{item.name}</div>
                  <div className="text-sm text-orange-600">{item.nameHindi}</div>
                  <div className="mt-1 text-orange-800 font-semibold">
                    ₹{item.price} / {item.unit}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {quantities[item.id] ? (
                    <div className="flex items-center gap-2 bg-orange-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-orange-600 active:bg-orange-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-orange-900">
                        {quantities[item.id]}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-orange-600 text-white rounded-md active:bg-orange-700"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium text-sm active:bg-orange-700"
                    >
                      Add / जोड़ें
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white px-4 py-4 border-t-2 border-orange-200 shadow-lg">
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 bg-orange-100 text-orange-700 rounded-lg font-semibold active:bg-orange-200">
            Pickup / पिकअप
          </button>
          <button className="flex-1 py-3.5 bg-orange-600 text-white rounded-lg font-semibold active:bg-orange-700">
            Pre-book / बुक करें
          </button>
        </div>
      </div>
    </div>
  );
}
