"strict";

const drinks = {
  gin: {
    name: [
      "Tanqueray London Dry Gin",
      "Tanqueray No.10",
      "Gordon's Gin",
      "Hendrick's",
      "Monkey 47",
      "Gin Mare",
    ],
    measure: ["0,03 l", "0,03 l", "0,03 l", "0,03 l", "0,03 l", "0,03 l"],
    price: [
      "25,00 kn",
      "50,00 kn",
      "20,00 kn",
      "30,00 kn",
      "60,00 kn",
      "40,00 kn",
    ],
  },
  rum: {
    name: [
      "Zacapa 23YO",
      "Zacapa XO",
      "Bacardi",
      "Malibu",
      "Santiago de la Cuba",
      "Santiago de la Cuba Gold",
      "Sailor Jerry",
    ],
    measure: [
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
    ],
    price: [
      "60,00 kn",
      "140,00 kn",
      "20,00 kn",
      "20,00 kn",
      "25,00 kn",
      "30,00 kn",
      "20,00 kn",
    ],
  },
  vodka: {
    name: ["Smirnoff", "Belvedere", "Grey Goose", "Roberto Cavalli"],
    measure: ["0,03 l", "0,03 l", "0,03 l", "0,03 l"],
    price: ["20,00 kn", "40,00 kn", "40,00 kn", "35,00 kn"],
  },
  whisky: {
    name: [
      "Johnnie Walker Gold Label",
      "Johnnie Walker Green Label",
      "Johnnie Walker Black Label",
      "Johnnie Walker Red Label",
      "Johnnie Walker Double Black Label",
      "Johnnie Walker Platinum",
      "Johnnie Walker Blue Label",
      "Southern Comfort",
      "Jameson",
      "Monkey Shoulder",
      "Glenfiddich 12Y",
      "Glenfiddich 15Y",
      "Glenfiddich 18Y",
      "Jim Beam",
      "Tulamore Dew",
      "The Famous Grouse",
      "Chivas Regal 12Y",
      "Chivas Extra",
      "Chivas Regal 18Y",
      "Jack Daniel's",
      "Jack Daniel's Gentleman Jack",
      "Jack Daniel's Single Barrel",
      "Ballantines",
    ],
    measure: [
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
    ],
    price: [
      "50,00 kn",
      "40,00 kn",
      "30,00 kn",
      "20,00 kn",
      "40,00 kn",
      "80,00 kn",
      "140,00 kn",
      "20,00 kn",
      "20,00 kn",
      "25,00 kn",
      "30,00 kn",
      "40,00 kn",
      "50,00 kn",
      "25,00 kn",
      "20,00 kn",
      "20,00 kn",
      "30,00 kn",
      "40,00 kn",
      "50,00 kn",
      "25,00 kn",
      "35,00 kn",
      "50,00 kn",
      "20,00 kn",
    ],
  },
  tequila: {
    name: ["Jose Cuervo", "Don Julio", "Don Julio Anejo"],
    measure: ["0,03 l", "0,03 l", "0,03 l"],
    price: ["25,00 kn", "50,00 kn", "60,00 kn"],
  },
  cognac: {
    name: [
      "Hennessy",
      "Martel",
      "Remy Martin V.S.O.P.",
      "Courvoisier V.S.O.P.",
    ],
    measure: ["0,03 l", "0,03 l", "0,03 l", "0,03 l"],
    price: ["30,00 kn", "30,00 kn", "40,00 kn", "50,00 kn"],
  },
  bitters: {
    name: [
      "Aperol Spritz",
      "Amaro",
      "J??germeister",
      "Bailey's",
      "Campari",
      "Romana Sambuca",
    ],
    measure: ["0,35 l", "0,03 l", "0,03 l", "0,03 l", "0,03 l", "0,03 l"],
    price: [
      "50,00 kn",
      "15,00 kn",
      "20,00 kn",
      "20,00 kn",
      "20,00 kn",
      "20,00 kn",
    ],
  },
  domestic: {
    name: [
      "Rum",
      "Pelinkovac",
      "Pelinkovac Antique",
      "Brandy",
      "Stock",
      "Kru??kovac",
      "Orahovac",
      "Medova??a",
      "??ljivovica",
      "Borovnica",
      "Travarica",
      "Williams",
      "Smokova??a",
      "Viljamovka",
      "Vi??njeva??a",
      "Limun rakija",
    ],
    measure: [
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
    ],
    price: [
      "15,00 kn",
      "13,00 kn",
      "17,00 kn",
      "15,00 kn",
      "20,00 kn",
      "14,00 kn",
      "13,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "15,00 kn",
      "18,00 kn",
      "15,00 kn",
      "20,00 kn",
      "17,00 kn",
      "17,00 kn",
    ],
  },
  wine: {
    name: [
      "Kozlovi?? ??a??a / glass",
      "Bijelo vino / White wine",
      "Bijelo vino / White wine",
      "Po??ip vrhunsko vino / White wine premium quality",
      "Malvazija vrhunsko vino / White wine premium quality",
      "Crno vino / Red wine",
      "Crno vino / Red wine",
      "Dinga?? vrhunsko vino / Red wine premium quality",
    ],
    measure: [
      "0,15 l",
      "0,187 l",
      "1,00 l",
      "0,75 l",
      "0,75 l",
      "0,187 l",
      "1,00 l",
      "0,75 l",
    ],
    price: [
      "45,00 kn",
      "28,00 kn",
      "120,00 kn",
      "180,00 kn",
      "220,00 kn",
      "28,00 kn",
      "120,00 kn",
      "220,00 kn",
    ],
  },
  dessert: {
    name: ["Pro??ek", "Vermouth", "Martini"],
    measure: ["0,10 l", "0,10 l", "0,10 l"],
    price: ["20,00 kn", "25,00 kn", "25,00 kn"],
  },
  sparkling: {
    name: [
      "Pjenu??ac",
      "Pjenu??ac",
      "Botega Gold",
      "Mo??t Chardon",
      "Botega Gold",
      "Mo??t Chardon",
      "Mo??t Chardon",
      "Mo??t Chardon Ice Imperial",
      "Mo??t Chardon Rose",
      "Botega Rose",
      "Piper Champagne",
      "Dom Perignon",
    ],
    measure: [
      "0,20 l",
      "0,75 l",
      "0,20 l",
      "0,20 l",
      "0,70 l",
      "0,375 l",
      "0,70 l",
      "0,75 l",
      "0,75 l",
      "0,70 l",
      "0,70 l",
      "0,70 l",
    ],
    price: [
      "50,00 kn",
      "150,00 kn",
      "70,00 kn",
      "230,00 kn",
      "300,00 kn",
      "450,00 kn",
      "850,00 kn",
      "1000,00 kn",
      "1000,00 kn",
      "300,00 kn",
      "750,00 kn",
      "2200,00 kn",
    ],
  },
  beer: {
    name: [
      "Stella Artois To??ena / Draft",
      "Stella Artois To??ena / Draft",
      "O??ujsko",
      "O??ujsko",
      "Staropramen",
      "Staropramen",
      "Stella Artois",
      "Beck's",
      "Corona",
      "Hoegaarden",
      "Leffe Blond",
      "Leffe Brown",
      "Worthington's",
      "O??ujsko okusi / O??ujsko flavors",
      "O??ujsko okusi / O??ujsko flavors",
      "O??ujsko Cool(bezalkoholno)",
      "Tomislav",
      "Somersby - jabuka, kru??ka, kupina / apple, pear, blackberry",
    ],
    measure: [
      "0,30 l",
      "0,40 l",
      "0,33 l",
      "0,50 l",
      "0,33 l",
      "0,50 l",
      "0,33 l",
      "0,33 l",
      "0,355 l",
      "0,33 l",
      "0,33 l",
      "0,33 l",
      "0,50 l",
      "0,50 l",
      "0,33 l",
      "0,50 l",
      "0,50 l",
      "0,33 l",
    ],
    price: [
      "20,00 kn",
      "23,00 kn",
      "17,00 kn",
      "20,00 kn",
      "17,00 kn",
      "20,00 kn",
      "20,00 kn",
      "20,00 kn",
      "30,00 kn",
      "25,00 kn",
      "28,00 kn",
      "28,00 kn",
      "30,00 kn",
      "20,00 kn",
      "17,00 kn",
      "17,00 kn",
      "15,00 kn",
      "28,00 kn",
    ],
  },
  beverages: {
    name: [
      "Hidra",
      "Thomas Henry - Tonic Water, Bitter Lemon,Ginger Ale, Spicy Ginger, Cherry Blossom",
      "Orangina",
      "Coca-Cola",
      "Coca-Cola Zero",
      "Fanta",
      "Sprite",
      "Schweppes - Bitter Lemon, Tonic, Tangerina",
      "Pipi",
      "Cockta",
      "1724 Water",
      "Ledeni ??aj - breskva, ??umsko vo??e / Ice tea - peach, forrest fruit",
      "Cedevita",
      "Limunada prirodna / Natural lemonade",
      "Naran??ada / Freshly squeezed orange juice",
      "Naran??ada / Freshly squeezed orange juice",
      "Roza Limunada / Rose Lemonade",
      "Juicy prirodni sok - naran??a, breskva,   crni ribiz ,ananas, jagoda / Natural juice - orange, peach, black currant,  pineapple, strawberry",
      "Jamnica / Sparkling water",
      "Jamnica Sensation / Sparkling water with flavour",
      "Jana prirodna voda",
      "Jana s okusom",
      "Red Bull",
    ],
    measure: [
      "0,50 l",
      "0,20 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,20 l",
      "0,25 l",
      "0,25 l",
      "0,30 l",
      "0,25 l",
      "0,35 l",
      "0,275 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,33 l",
      "0,33 l",
      "0,25 l",
    ],
    price: [
      "20,00 kn",
      "35,00 kn",
      "19,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "17,00 kn",
      "35,00 kn",
      "17,00 kn",
      "14,00 kn",
      "21,00 kn",
      "21,00 kn",
      "30,00 kn",
      "45,00 kn",
      "19,00 kn",
      "12,00 kn",
      "14,00 kn",
      "13,00 kn",
      "17,00 kn",
      "28,00 kn",
    ],
  },
  hot: {
    name: [
      "Espresso",
      "Espresso s mlijekom mali / Small espresso with milk",
      "Espresso s mlijekom veliki / Large espresso with milk",
      "Espresso mix / Espresso with milk and cream",
      "Espresso sa ??lagom mali / Small espresso with milk",
      "Espresso sa ??lagom veliki / Large espresso with cream",
      "Americano",
      "Cappuccino",
      "Bijela kava / Caffe Latte",
      "Irska kava / Irish coffe",
      "Espresso bez kofeina / Decaf espresso",
      "Espresso s mlijekom bez kofeina / Decaf espresso with milk",
      "Espresso sa ??lagom bez kofeina / Decaf espresso with cream",
      "Cappuccino bez kofeina / Decaf cappuccino",
      "Bijela kava bez kofeina / Decaf Caffe Latte",
      "Nescaf?? - classic, ??okolada, vanilija,  irish, lje??njak / classic, chocolate, vanillia, irish, walnut",
      "Kakao / Cocoa",
      "Vru??a ??okolada(gusta) / Hot chocolate(thic)",
      "Vru??a ??okolada(gusta) sa ??lagom / Hot chocolate(thic) with cream",
      "??aj s rumom i medom / Tea with rum and honey",
      "??aj s limunom i medom / Tea with lemon and honey",
      "Rum punch",
      "Mlijeko / Milk",
      "Frape",
      "Frape sa ??lagom / Frape with cream",
    ],
    measure: [
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "??al./cup",
      "0,20 l",
      "0,30 l",
      "0,30 l",
    ],
    price: [
      "9,00 kn",
      "10,00 kn",
      "12,00 kn",
      "14,00 kn",
      "10,00 kn",
      "12,00 kn",
      "12,00 kn",
      "14,00 kn",
      "14,00 kn",
      "30,00 kn",
      "12,00 kn",
      "14,00 kn",
      "15,00 kn",
      "16,00 kn",
      "16,00 kn",
      "15,00 kn",
      "15,00 kn",
      "19,00 kn",
      "22,00 kn",
      "14,00 kn",
      "12,00 kn",
      "14,00 kn",
      "8,00 kn",
      "30,00 kn",
      "35,00 kn",
    ],
  },
  extras: {
    name: ["Rum", "??lag / Cream", "Mlijeko /  Milk"],
    measure: ["porc./portion", "porc./portion", "porc./portion"],
    price: ["5,00 kn", "5,00 kn", "3,00 kn"],
  },
  bottle: {
    name: [
      "Johnnie Walker Red + 4 Coca Cola",
      "Jack Daniels + 6 Coca Cola",
      "J??germeister + 4 Coca Cola",
      "Smirnoff + 4 Red Bull",
    ],
    measure: [
      "0,75 l + 1,00 l",
      "0,75 l + 1,50 l",
      "0,75 l + 1,00 l",
      "0,75 l + 1,00 l",
    ],
    price: ["400,00 kn", "480,00 kn", "400,00 kn", "400,00 kn"],
  },
  cocktails: {
    name: ["Cocktails", "Shooters"],
    measure: ["0,30 l", "shoot"],
    price: ["50,00 kn", "30,00 kn"],
  },
};

const drinkslist = document.querySelector(".btn-group");
const popup = document.querySelector(".table-menu");
const popupTitle = document.querySelector(".table-name");
const popupContent = document.querySelector(".popup");
const popupClose = document.querySelector(".close");
const slideImg = document.querySelector(".img");
const popupSpecial = document.querySelector(".popup-content");
let slideCount = 0;
let specialCount = 0;

drinkslist.addEventListener("click", function (e) {
  const drink = e.target.dataset.name;
  const drinktext = e.target.textContent;
  let nameDrinks = "";
  if (drink.length > 30) return;
  if (drink === "imported") nameDrinks = "imported";
  if (drink === "domestic") nameDrinks = "domestic";
  if (drink === "wine") nameDrinks = "wine";
  if (drink === "dessert") nameDrinks = "dessert";
  if (drink === "sparkling") nameDrinks = "sparkling";
  if (drink === "bottle") nameDrinks = "bottle";
  if (drink === "beer") nameDrinks = "beer";
  if (drink === "beverage") nameDrinks = "beverages";
  if (drink === "hot") nameDrinks = "hot";
  if (drink === "cocktail") nameDrinks = "cocktails";
  if (drink === "extra") nameDrinks = "extras";

  popupTitle.textContent = drinktext;
  popupContent.style.opacity = 1;
  popupContent.style.zIndex = 1;
  popupSpecial.style.backgroundColor = "#fefefe";
  popupSpecial.style.color = "black";

  popup.innerHTML = "";
  if (nameDrinks !== "imported") {
    drinks[nameDrinks].name.forEach((el, pos) => {
      popup.insertAdjacentHTML(
        "beforeend",
        `
    <tr>
    <td>${drinks[nameDrinks].name[pos]}</td>
    <td>${
      drinks[nameDrinks].measure.length < 2
        ? drinks[nameDrinks].measure[0]
        : drinks[nameDrinks].measure[pos]
    }</td>
    <td>${drinks[nameDrinks].price[pos]}</td>
  </tr>`
      );
    });
  }
  if (nameDrinks === "imported") {
    popup.insertAdjacentHTML(
      "beforeend",
      `
      <hr>
      <div class="imported-group">
      <button class="imp-button" data-name="gin">Gin</button>
      <button class="imp-button" data-name="rum">Rum</button>
      <button class="imp-button" data-name="vodka">Vodka</button>
      <button class="imp-button" data-name="whisky">Whisky <br> & Bourbon</button>
      <button class="imp-button" data-name="tequila">Tequila</button>
      <button class="imp-button" data-name="cognac">Cognac</button>
      <button class="imp-button" data-name="bitters">Bitters <br> & Liqueurs</button>
    </div>
    `
    );
  }
  if (nameDrinks !== "imported") return;
  document
    .querySelector(".imported-group")
    .addEventListener("click", function (e) {
      const drink = e.target.dataset.name;
      const drinkName = e.target.textContent;
      let nameDrinks = "";
      if (drink.length > 30) return;
      if (drink === "gin") nameDrinks = "gin";
      if (drink === "rum") nameDrinks = "rum";
      if (drink === "vodka") nameDrinks = "vodka";
      if (drink === "whisky") nameDrinks = "whisky";
      if (drink === "tequila") nameDrinks = "tequila";
      if (drink === "cognac") nameDrinks = "cognac";
      if (drink === "bitters") nameDrinks = "bitters";

      popupTitle.textContent = drinkName;
      popupContent.style.opacity = 1;
      popupContent.style.zIndex = 1;
      popupSpecial.style.backgroundColor = "#fefefe";
      popupSpecial.style.color = "black";

      popup.innerHTML = "";
      if (nameDrinks !== "imported") {
        drinks[nameDrinks].name.forEach((el, pos) => {
          popup.insertAdjacentHTML(
            "beforeend",
            `
    <tr>
    <td>${drinks[nameDrinks].name[pos]}</td>
    <td>${
      drinks[nameDrinks].measure.length < 2
        ? drinks[nameDrinks].measure[0]
        : drinks[nameDrinks].measure[pos]
    }</td>
    <td>${drinks[nameDrinks].price[pos]}</td>
  </tr>`
          );
        });
      }
    });
});

popupClose.addEventListener("click", function () {
  popupContent.style.opacity = 0;
  popupContent.style.zIndex = -1;
  specialCount = 0;
});

const slideShow = function () {
  if (slideCount === 8) slideCount = 0;
  slideCount++;
  slideImg.src = `imgs/${slideCount}.jpg`;
  slideCounter();
};

const slideCounter = function () {
  setTimeout(function () {
    slideShow();
  }, 3000);
};

slideShow();
