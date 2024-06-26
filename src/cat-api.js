const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_ehFm50B7nJAxuK22Wm1oDJ8ZjQ92pNu5zKCSW1PMteAUK39FNZPKh0w84bM7ni35";

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
