var btn = document.querySelector(".search_btn");
var popup = document.querySelector(".blank-search-hotel");
var form = popup.querySelector("form");
var dateArr = popup.querySelector(".date-arrival");
var dateDep = popup.querySelector(".date-departure");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("open");
});

form.addEventListener("submit", function (event) {
     if (!dateArr.value || !dateDep.value)    {
       event.preventDefault();
       popup.classList.toggle("modal-error");
     }
});