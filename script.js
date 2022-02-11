let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event) {
   window.location.href = "https://bing.com";

   event.preventDefault();

   //alert('Hello world');
});

let  example2 =  document.querySelector('#example2');
example2.addEventListener('click', function(event) {

   window.location.href = "https://codigniter.com";
   //event.preventDefault();
});

document.body.addEventListener('contextmenu', function(event) {
   //event.preventDefault();
});

document.querySelector('div').addEventListener('dblclick', function(event) {
   alert('Hello');
   //event.preventDefault(); -- doesn't work
});

let example = document.createElement('section');
example.style.width = '20px';
example.style.height = '20px';
example.style.backgroundColor = 'black';
example.style.position = 'absolute';
document.body.append(example);


document.body.addEventListener('div').addEventListener('mousemove', function(event) {
   example.style.top = event.clientY + 'px';
   example.style.top = event.clientX + 'px';
});

