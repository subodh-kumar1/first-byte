import { ArrowLeft, CheckCircle2, Clock, Package, Truck } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    label: "Ordered", 
    labelHindi: "ऑर्डर किया", 
    status: "completed",
    time: "2:45 PM",
    icon: CheckCircle2
  },
  { 
    id: 2, 
    label: "Confirmed", 
    labelHindi: "पुष्टि हुई", 
    status: "completed",
    time: "2:47 PM",
    icon: CheckCircle2
  },
  { 
    id: 3, 
    label: "Ready", 
    labelHindi: "तैयार", 
    status: "active",
    time: "Expected: 3:00 PM",
    icon: Package
  },
  { 
    id: 4, 
    label: "Out for Delivery", 
    labelHindi: "डिलीवरी के लिए", 
    status: "pending",
    time: "",
    icon: Truck
  },
];

export function OrderStatusScreen() {
  return (
    <div className="flex flex-col h-full bg-amber-50">
      {/* Header */}
      <div className="bg-orange-600 text-white px-4 py-4 shadow-md">
        <div className="flex items-center gap-3 mb-3">
          <button className="p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <div className="font-semibold text-lg">Order Status / ऑर्डर स्टेटस</div>
            <div className="text-sm opacity-90">Order #12847</div>
          </div>
        </div>
      </div>

      {/* Current Status Banner */}
      <div className="bg-orange-100 px-4 py-4 border-b-2 border-orange-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-orange-900">Your order is being prepared</div>
            <div className="text-sm text-orange-700">आपका ऑर्डर तैयार किया जा रहा है</div>
            <div className="text-xs text-orange-600 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Estimated ready by 3:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="flex-1 overflow-auto px-4 py-5">
        <div className="text-sm text-orange-800 mb-4 font-medium">
          Order Progress / ऑर्डर प्रगति
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.status === 'completed';
            const isActive = step.status === 'active';
            const isPending = step.status === 'pending';

            return (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-12 w-0.5 h-12 ${
                      isCompleted ? 'bg-green-500' : 'bg-orange-200'
                    }`}
                  />
                )}

                {/* Step */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-orange-600 text-white'
                        : 'bg-orange-200 text-orange-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div
                    className={`flex-1 pt-1 pb-2 ${
                      isPending ? 'opacity-50' : ''
                    }`}
                  >
                    <div
                      className={`font-semibold ${
                        isCompleted || isActive ? 'text-orange-900' : 'text-orange-500'
                      }`}
                    >
                      {step.label}
                    </div>
                    <div
                      className={`text-sm ${
                        isCompleted || isActive ? 'text-orange-700' : 'text-orange-400'
                      }`}
                    >
                      {step.labelHindi}
                    </div>
                    {step.time && (
                      <div
                        className={`text-xs mt-1 ${
                          isCompleted ? 'text-green-700' : isActive ? 'text-orange-600' : 'text-orange-400'
                        }`}
                      >
                        {step.time}
                      </div>
                    )}
                  </div>
                  {isCompleted && (
                    <div className="text-green-600 text-xs font-medium pt-2">
                      ✓ Done
                    </div>
                  )}
                  {isActive && (
                    <div className="text-orange-600 text-xs font-medium pt-2">
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Details */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-orange-200">
          <div className="text-sm font-semibold text-orange-900 mb-3">
            Order Details / ऑर्डर विवरण
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-orange-700">
              <span>Shop / दुकान</span>
              <span className="font-medium">Gupta Kirana Store</span>
            </div>
            <div className="flex justify-between text-orange-700">
              <span>Items / सामान</span>
              <span className="font-medium">3 items</span>
            </div>
            <div className="flex justify-between text-orange-700">
              <span>Total Amount / कुल राशि</span>
              <span className="font-semibold text-orange-900">₹360</span>
            </div>
            <div className="flex justify-between text-orange-700">
              <span>Payment / भुगतान</span>
              <span className="font-medium">Cash on Delivery</span>
            </div>
          </div>
        </div>

        {/* Shop Contact */}
        <div className="mt-3 bg-white rounded-lg p-4 shadow-sm border border-orange-100">
          <div className="text-sm font-semibold text-orange-900 mb-2">
            Shop Contact / दुकान संपर्क
          </div>
          <div className="text-sm text-orange-700">
            📞 +91 98765 43210
          </div>
        </div>
      </div>

      {/* Bottom Help */}
      <div className="bg-white px-4 py-4 border-t border-orange-200">
        <button className="w-full py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold active:bg-orange-50">
          Need Help? / मदद चाहिए?
        </button>
      </div>
    </div>
  );
}
