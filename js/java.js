





var article_footer=document.querySelector(".article_footer div");
var voir_plus=document.querySelector(".voir_plus");

article_footer.addEventListener("click", () => {
voir_plus.classList.toggle("hover_voir_plus");
article_footer.classList.toggle("hover_x");
})