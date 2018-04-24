var a = document.getElementById("A");
you=0;
function ten(){
  you+=1;
  console.log("wu");
  a.style.backgroundSize=you+'%';
};


var acc = document.getElementsByClassName("q");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // panel.style.display = "block";
    }
  });
}
