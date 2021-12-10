const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: String) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((r) => r.json());
}

export function fetchCoinPriceInfo(coinId: String) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((r) => r.json());
}
