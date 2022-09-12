const button = document.getElementById('submit')

function selecionar(k) {
    var x = document.getElementsByClassName("option");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.background = "#29303e"
    }
    document.getElementById(k).style.background = "#FB7413";

    document.getElementById("change-text").innerHTML = `You selected ${k} out of 5`
  }

const container = document.getElementById("box-1")
const container2 = document.getElementById("box-2")

button.addEventListener('click', function(){

        if(container.style.display === "none") {
        container.style.display = "block"
        container2.style.display = "none"
        } else {
        container.style.display = "none"
        container2.style.display = "block"
    }
})