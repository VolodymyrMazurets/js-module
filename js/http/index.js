const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_COCTAILS_URL = "https://www.thecocktaildb.com/api/json/v1";
const api_key = '1';

const urls = {
  posts: `${BASE_URL}/posts`,
};

const coctailsUrls = {
  random: `${BASE_COCTAILS_URL}/${api_key}/random.php`,
  search: `${BASE_COCTAILS_URL}/${api_key}/search.php`
}

export { BASE_URL, urls, coctailsUrls };


