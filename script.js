
  function showDropDown() {
    var dropdown = document.getElementById('dropdown'); //assigned the html to the variable via dom
    if(dropdown.style.display == 'none'){  //if the display is none in the style then set to block else return back to default state when clicked.
   document.getElementById('dropdown').style.display = 'block';
  }

  else {
    document.getElementById('dropdown').style.display = 'none';
  }
}