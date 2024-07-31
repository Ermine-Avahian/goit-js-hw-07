const categories = document.querySelector("#categories");
const categoriesItem = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li").length;

  console.log(`Ctegory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
