

// const blobContainers=document.querySelectorAll(".box");
// // es ma jo foreach k foran bad blobContainer naam rakha ha ye ham apni mrzi sy b rakh skty hain
// blobContainers.forEach(blobContainer=>{
//   blobContainer.addEventListener('touchstart mouseover',function(){
//     const blobs=blobContainer.querySelectorAll('#blob');
//     blobs.forEach(blob=>{
//       const blobcolor=randomColorgenerator();
//        blob.style.fill=blobcolor;
      
//     })
//   })

// })

// function randomColorgenerator(){
//   const red=Math.floor(Math.random() * 256);
//   const green=Math.floor(Math.random() * 256);
//   const blue=Math.floor(Math.random() * 256);
//   const randomcolor= `rgb(${red},${green},${blue})`
//   return randomcolor;
// }
// function randomColorgenerator(){
//   const letters= '0123456789ABCDEF';
//   let color='#';
//   for(i=0;i<6;i++){
//     color += letters [Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


const blobContainers = document.querySelectorAll(".box");

// Function to apply hover-like effect
function applyHoverEffect() {
  const blobs = this.querySelectorAll('#blob');
  blobs.forEach(blob => {
    const blobcolor = randomColorgenerator();
    blob.style.fill = blobcolor;
  });
}

// Add touchstart and mouseover events to the elements
blobContainers.forEach(blobContainer => {
  blobContainer.addEventListener('touchstart', applyHoverEffect, { passive: true });
  blobContainer.addEventListener('mouseover', applyHoverEffect);
});

// Function to generate a random color
function randomColorgenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomcolor = `rgb(${red},${green},${blue})`;
  return randomcolor;
}


const button=document.querySelector(".button-resume");
const buttonover=document.querySelector(".arrow-down");
button.addEventListener("mouseover",function(){
 
  if (buttonover !== null) {
    originaldisplayvalue=buttonover.style.display;
    buttonover.style.display="none";
  }
      
      
})

button.addEventListener("mouseout",function(){
  const buttonover=document.querySelector(".arrow-down");
  if (buttonover !== null) {
    buttonover.style.display=originaldisplayvalue;
  }
  
})
button.addEventListener("onclick",function(){
  button.style.color="lightgrey";
  console.log("hy");
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// const button = document.querySelector(".button-resume");
// const buttonover = document.querySelector(".arrow-down");
// let originalDisplayValue;

// button.addEventListener("mouseover", function() {
//   if (buttonover !== null) {
//     originalDisplayValue = buttonover.style.display;
//     buttonover.style.display = "none";
//   }
// });

// button.addEventListener("mouseout", function() {
//   if (buttonover !== null) {
//     buttonover.style.display = originalDisplayValue;
//   }
// });
