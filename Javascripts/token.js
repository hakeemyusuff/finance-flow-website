const DATA_PATH = "../data/token.json";
const desktopTable = document.querySelector(".table");
const tokensMobile = document.querySelector(".tokens_mobile");

//Fetch tokens data from the json file
async function getTokenData(path) {
  const response = await fetch(path);
  const body = await response.json();
  const { tokens } = body;
  return tokens;
}

//Get each token from the array and render it to the page
function renderTokenDesktop(tokens) {
  for (let token of tokens) {
    const tableRow = document.createElement("tr");
    const { name, symbol, description, images, marketCap, volume, website } =
      token;
    const tokenDetails = `
      <td><div class="coin"><img src="${images}" alt="token icon"/><h3 class="fw-bold">${name}</h3><p class="symbol">${symbol.toUpperCase()}</p></div></td>
      <td><p>${description}</p></td>
      <td><p>${marketCap}</p></td>
      <td><p>${volume}</p></td>
      <td><a href="#">${website}</a></td>`;
    tableRow.innerHTML = tokenDetails;
    desktopTable.appendChild(tableRow);
    renderTokenMobile(
      name,
      symbol,
      description,
      images,
      marketCap,
      volume,
      website
    );
  }
}

function renderTokenMobile(
  name,
  symbol,
  description,
  images,
  marketCap,
  volume,
  website
) {
  const token = document.createElement("div");
  token.setAttribute("class", "token");
  const tokenDetails = `
<div class="name">
<h2 class="fw-bold">NAME</h2>
<div class="coin">
  <img src="${images}" alt="token icon">
  <h3 class="fw-bold">${name}</h3>
  <p class="symbol">${symbol.toUpperCase()}</p>
</div>
</div>
<div class="description">
<h2 class="fw-bold">DESCRIPTION</h2>
<p>${description}</p>
</div>
<div class="market">
<h2 class="fw-bold">MARKET CAP</h2>
<p class="fw-bold">${marketCap}</p>
</div>
<div class="Volume">
<h2 class="fw-bold">VOLUME</h2>
<p class="fw-bold">${volume}</p>
</div>
<div class="website">
<h2 class="fw-bold">WEBSITE</h2>
<a href="">${website}</a>
</div>`;
  token.innerHTML = tokenDetails;
  tokensMobile.appendChild(token);
}
const tokens = await getTokenData(DATA_PATH);
renderTokenDesktop(tokens);
