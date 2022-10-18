const btn = document.getElementById("btn");
const links = document.querySelectorAll(".ul li");

// btn.addEventListener("click", () => {
//   console.log("hello");
//   links.forEach((link, index) => {
//     link.addEventListener("click", () => {
//       link.classList.add("white");
//     });

//     console.log(index);
//   });
// });

links.forEach((link) => {
  link.addEventListener("click", () => link.classList.add("white"));
});
