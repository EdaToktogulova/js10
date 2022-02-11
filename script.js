let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event) {
   window.location.href = "https://bing.com";

   event.preventDefault();

   //alert('Hello world');
});

let  example2 =  document.querySelector('#example2');
example2.addEventListener('click', function(event) {

   window.location.href = "https://codigniter.com";
   event.preventDefault();
});

document.body.addEventListener('contextmenu', function(event) {
   
});