import { ArrowLeft, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  nameHindi: string;
  price: number;
  quantity: number;
  unit: string;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Rice", nameHindi: "चावल", price: 60, quantity: 2, unit: "kg" },
  { id: 2, name: "Toor Dal", nameHindi: "तूर दाल", price: 120, quantity: 1, unit: "kg" },
  { id: 3, name: "Cooking Oil", nameHindi: "खाद्य तेल", price: 180, quantity: 1, unit: "L" },
];

export function CartOrder() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="flex flex-col h-full bg-amber-50">
      {/* Header */}
      <div className="bg-orange-600 text-white px-4 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <div className="font-semibold text-lg">Your Cart / आपकी टोकरी</div>
            <div className="text-sm opacity-90">Gupta Kirana Store</div>
          </div>
        </div>
      </div>

      {/* Delivery/Pickup Toggle */}
      <div className="px-4 py-3 bg-white border-b border-orange-200">
        <div className="text-sm text-orange-800 mb-2 font-medium">
          Select Service / सेवा चुनें
        </div>
        <div className="flex gap-2 p-1 bg-amber-100 rounded-lg">
          <button className="flex-1 py-2.5 bg-orange-600 text-white rounded-md font-medium text-sm shadow-sm">
            Delivery / डिलीवरी
          </button>
          <button className="flex-1 py-2.5 text-orange-700 rounded-md font-medium text-sm">
            Pickup / पिकअप
          </button>
        </div>
        <div className="mt-3 text-xs text-green-700 bg-green-50 p-2 rounded-md border border-green-200">
          ✓ Free delivery within 2 km / 2 किमी के भीतर मुफ़्त
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-auto px-4 py-3">
        <div className="text-sm text-orange-800 mb-3 font-medium">
          Items / सामान ({cartItems.length})
        </div>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-orange-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-orange-900">{item.name}</div>
                  <div className="text-sm text-orange-600">{item.nameHindi}</div>
                  <div className="mt-1 text-sm text-orange-700">
                    ₹{item.price} × {item.quantity} {item.unit}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-orange-900">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                  <button className="p-1 text-red-600 active:bg-red-50 rounded">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-4 bg-white rounded-lg p-4 shadow-sm border border-orange-200">
          <div className="text-sm font-semibold text-orange-900 mb-3">
            Order Summary / ऑर्डर सारांश
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-orange-700">
              <span>Subtotal / कुल सामान</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-green-700">
              <span>Delivery Fee / डिलीवरी शुल्क</span>
              <span className="font-semibold">FREE</span>
            </div>
            <div className="border-t border-orange-200 pt-2 mt-2"></div>
            <div className="flex justify-between font-semibold text-orange-900 text-base">
              <span>Total / कुल राशि</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mt-3 bg-white rounded-lg p-4 shadow-sm border border-orange-100">
          <div className="text-sm font-semibold text-orange-900 mb-2">
            Delivery Address / डिलीवरी पता
          </div>
          <div className="text-sm text-orange-700">
            Ram Nagar, Near Vishnupad Mandir<br />
            Gaya, Bihar - 823001
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white px-4 py-4 border-t-2 border-orange-200 shadow-lg">
        <button className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg active:bg-orange-700">
          Place Order / ऑर्डर करें
        </button>
        <div className="text-xs text-center text-orange-600 mt-2">
          Cash on Delivery / कैश ऑन डिलीवरी
        </div>
      </div>
    </div>
  );
}
