function ver(id){
document.getElementById(id).style.display = "block"
}

function ocultar(id){
document.getElementById(id).style.display = "none"
}
function msg(){
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}