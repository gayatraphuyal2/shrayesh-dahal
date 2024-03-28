const cacheName = "calendar-v1";
const cacheUrls = [
  "./",
 
  
  "./data/solar_ns_events.json",
  "./data/2070_data.json",
  "./data/2071_data.json",
  "./data/2072_data.json",
  "./data/2073_data.json",
  "./data/2074_data.json",
  "./data/2075_data.json",
  "./data/2076_data.json",
  "./data/2077_data.json",
  "./data/2078_data.json",
  "./data/2079_data.json",
  "./data/2080_data.json",
  "./data/data.json",
  "./data/sun.json",
  "./data/rashi.json",
  "./data/2081_data.json",
  "./data/2076_detailed.json",
  "./data/2077_detailed.json",
  "./data/2078_detailed.json",
  "./data/2079_detailed.json",
  "./data/2080_detailed.json",
  "./data/2081_detailed.json",
  "./data/international_events.json",
  "./data/national_events.json",
  "./data/other_json.json",
  "./data/public_holidays.json",
  "./data/public1_holidays.json",
  "./data/public2_holidays.json",
  "./data/public3_holidays.json",
  "./data/sunrise_sunset_json/sunrise_2019.json",
  "./data/sunrise_sunset_json/sunrise_2020.json",
  "./data/sunrise_sunset_json/sunrise_2021.json",
  "./data/sunrise_sunset_json/sunrise_2022.json",
  "./data/sunrise_sunset_json/sunrise_2023.json",
  "./data/sunrise_sunset_json/sunrise_2024.json",
  "./data/sunrise_sunset_json/sunrise_2025.json",
  "./data/sunrise_sunset_json/sunset_2019.json",
  "./data/sunrise_sunset_json/sunset_2020.json",
  "./data/sunrise_sunset_json/sunset_2021.json",
  "./data/sunrise_sunset_json/sunset_2022.json",
  "./data/sunrise_sunset_json/sunset_2023.json",
  "./data/sunrise_sunset_json/sunset_2024.json",
  "./data/sunrise_sunset_json/sunset_2025.json",
  "./data/muhoortta.json",
  "./assets/favicon.svg",
  "./assets/brihat_calendar.png",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
  "./css/index.css",
  "./css/index_details.css",
  "./css/index_cal_conv.css",
  "./css/public_holidays.css",
  "./css/muhoortta.css",
  "./css/parvas.css",
  "./css/settings.css",
  "./css/panchang.css",
  "./js/NS.js",
  "./js/NS_AD.js",
  "./js/NS_BS.js",
  "./js/AD_BS.js",
  "./js/index.js",
  "./js/index_cal_conv.js",
  "./js/index_details.js",
  "./js/muhoortta.js",
  "./js/parvas.js",
  "./js/public_holidays.js",
  "./js/public1_holidays.js",
  "./js/public2_holidays.js",
  "./js/public3_holidays.js",
  "./js/swipe_actions.js",

 
 
  "./index.html",
  
];

// Installing the Service Worker
self.addEventListener("install", async (event) => {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(cacheUrls);
  } catch (error) {
    console.error("Service Worker installation failed:", error);
  }
});

// Fetching resources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);

      try {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          console.log("cachedResponse: ", event.request.url);
          return cachedResponse;
        }

        const fetchResponse = await fetch(event.request);
        if (fetchResponse) {
          console.log("fetchResponse: ", event.request.url);
          await cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        }
      } catch (error) {
        console.log("Fetch failed: ", error);
        const cachedResponse = await cache.match("index.html");
        return cachedResponse;
      }
    })()
  );
});
