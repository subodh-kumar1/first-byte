// "use client";

// import { useEffect, useState } from "react";

// export default function LocationDetector() {
//   const [area, setArea] = useState<string | null>(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       const { latitude, longitude } = position.coords;

//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//       );
//       const data = await res.json();

//       setArea(
//         data.address.city ||
//           data.address.town ||
//           data.address.village ||
//           data.display_name
//       );
//     });
//   }, []);

//   return <div className="font-semibold">{area ?? "Detecting..."}</div>;
// }
