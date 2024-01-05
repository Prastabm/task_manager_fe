function currentState(tablink ,name){

    var panes = document.querySelectorAll('.tasks');
            panes.forEach(function(pane) {
                pane.classList.remove('active');
            });


   var selected = document.getElementById(name);
   selected.classList.add('active');

   var tabs = document.querySelectorAll('.tablink');
            tabs.forEach(function(tablink) {
                tablink.classList.remove('active');
            });
   tablink.classList.add('active');

}
