function myFunction() {
// declaracion de variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("buscar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
  
    // Ciclo para mostrar los objetos con el valor de busqueda y ocultar el resto
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }