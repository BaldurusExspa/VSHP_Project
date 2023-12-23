/* Ф-ция переключения окон */ 
function MainChange() {
    document.getElementById('main').classList.toggle('showMain');
    document.getElementById('first').classList.toggle('showFirst');
  }
  window.onclick = function(event) {
    if (!event.target.matches('.buttonStart')) {
      var dropdowns = document.getElementsByClassName('first') && document.getElementsByClassName('main');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
/* / Ф-ция переключения окон / */

/* Ф-ция переключения окон */ 
function FirstChange() {
  document.getElementById('first').classList.toggle('showFirst');
  document.getElementById('second').classList.toggle('showSecond');
}
window.onclick = function(event) {
  if (!event.target.matches('.buttonFirst')) {
    var dropdowns = document.getElementsByClassName('second') && document.getElementsByClassName('first');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* / Ф-ция переключения окон / */

//Основной массив
let cake = [];