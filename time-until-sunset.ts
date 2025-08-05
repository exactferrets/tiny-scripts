async function getTimeUntilSunset() {
  const response = await fetch("https://api.sunrise-sunset.org/json?lat=52.52&lng=13.405&formatted=0");
  const data = await response.json();

  const now = new Date();
  const sunset = new Date(data.results.sunset);
  const diffMs = sunset.getTime() - now.getTime();
  const diffMin = Math.floor(diffMs / 1000 / 60);

  console.log(`⛅ Sunset in ~${diffMin} minutes`);
}

getTimeUntilSunset();
