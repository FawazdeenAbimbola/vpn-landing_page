  function showDropDown() {
    var dropdown = document.getElementById('dropdown'); //assigned the html to the variable via dom
        if(dropdown.style.display == 'none'){  
             document.getElementById('dropdown').style.display = 'block';
          }
          else {
            document.getElementById('dropdown').style.display = 'none';
          }
    }
