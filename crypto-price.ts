// Fetch BTC price from CoinGecko API

async function getBTCPrice() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  const data = await res.json();
  console.log("BTC price:", data.bitcoin.usd, "USD");
}

getBTCPrice();
