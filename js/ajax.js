import UiKit from "uikit";
import { coctailsUrls } from "./http";

const userInput = document.getElementById("input");
const cards = document.getElementById("cards");

const getRandomCoctail = async () => {
  try {
    const res = await fetch(coctailsUrls.random);
    const parsedRes = await res.json();
    UiKit.notification({
      message: "Data loaded successfuly",
      status: "success",
    });
    return parsedRes;
  } catch (error) {
    UiKit.notification({ message: error, status: "danger" });
  }
};

const getSearchedCoctails = async (query) => {
  try {
    const res = await fetch(`${coctailsUrls.search}?s=${query}`);
    const parsedRes = await res.json();
    return parsedRes;
  } catch (error) {
    UiKit.notification({ message: error, status: "danger" });
  }
};

const renderCards = (data = []) => {
  if (data.length) {
    cards.innerHTML = data
      .map(({ strDrink, strDrinkThumb, strInstructions }) => {
        return `
      <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m">
                <h3 class="uk-card-title">${strDrink}</h3>
                <img data-src="${strDrinkThumb}" width="100" height="100" alt="" uk-img>
                <p>${strInstructions}</p>
            </div>
      `;
      })
      .join("");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const { drinks } = await getRandomCoctail();
  renderCards(drinks);

  userInput.addEventListener("input", async (e) => {
    const { drinks } = await getSearchedCoctails(e.target.value);
    renderCards(drinks);
  });
});
