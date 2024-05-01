document.addEventListener("DOMContentLoaded", function () {
  
  const btns = document.getElementsByClassName("btn");
  
  Array.from(btns).forEach(function (btn) {
    
    btn.addEventListener("click", function () {

      let para = btn.parentElement.parentElement.querySelector("p");
      let img = btn.querySelector("img");
      
      if (btn.getAttribute("data-on") == "true") {

        btn.setAttribute("data-on", false);
        para.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
        return;
      } 

        btn.setAttribute("data-on", true);
        para.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
  
    });
  
  });

});
