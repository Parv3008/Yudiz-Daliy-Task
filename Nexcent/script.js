const cardData = [
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
  {
    title: "Lessons and insights ",
    spantitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    imageUrl: "assest/Illustration.svg",
  },
];

// hero card create
const heroContainer = document.querySelector(".hero-container");

cardData.map((card) => {
  const cardElement = document.createElement("div");
  const cardContent = `
        <div class="row d-flex align-content-center justify-content-between ps ">
                  <div class=" col-md-12 col-lg-7 left">
                      <h1 class="fw-bold w-100 fw-semibold">${card.title}<span class="">${card.spantitle}</span></h1>
                      <p class="pb-2 pt-2 fw-normal">${card.description}</p>
                      <button class="mybtn register">Register</button>

                  </div>
                  <div class=" col-md-12 col-lg-5 pt-xs-0 ill-img placeholder-glow">
                      <img src="${card.imageUrl}" alt="" class="ill-img " id="my-Image">
                  </div>
              </div>
      `;
  cardElement.innerHTML = cardContent;
  heroContainer.appendChild(cardElement);
});
