const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img class="gallery-item-img" src="${url}" alt="${alt}"></li>`
  )
  .join("");

gallery.innerHTML = markup;

gallery.style.listStyleType = "none";
gallery.style.marginTop = "0";
gallery.style.marginBottom = "0";
gallery.style.paddingLeft = "0";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "48px 24px";
gallery.style.padding = "0";
gallery.style.padding = "100px";
gallery.style.width = "1328px";

const galleryItems = gallery.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.style.width = "calc ((100% - 48px) / 3)";
});

const galleryItemImg = gallery.querySelectorAll(".gallery-item-img");
galleryItemImg.forEach((item) => {
  item.style.display = "block";
  item.style.maxWidth = "100%";
  item.style.width = "360px";
  item.style.height = "300px";
});
