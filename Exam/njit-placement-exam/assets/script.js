// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Holson Philemon" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let gbTrack
let ccTrack
let sugarTrack
let gbTotal
let ccTotal
let ccCount = 0
let sugarTotal

let holdTotal = 0

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked


    gbTrack = document.querySelector("#qty-gb").innerHTML = gb++;
     document.querySelector("#qty-total").innerHTML = gbTrack;

})

document.getElementById('minus-gb').addEventListener('click', function() {
  gbTotal = document.querySelector("#qty-gb").innerHTML = gbTrack--;
   holdTotal = document.querySelector("#qty-total").innerHTML = gbTotal;
 
})

document.getElementById('add-cc').addEventListener('click', function(){
  ccTrack = document.querySelector("#qty-cc").innerHTML = cc++
   ccTotal = document.querySelector("#qty-total").innerHTML = ccTrack + holdTotal;
})
document.getElementById('minus-cc').addEventListener('click', function(){
  document.querySelector("#qty-cc").innerHTML = ccTrack--
   ccCount = document.querySelector("#qty-total").innerHTML = ccTotal--;
})

document.getElementById('add-sugar').addEventListener('click', function(){
  sugarTrack = document.querySelector("#qty-sugar").innerHTML = sugar++
   sugarTotal = document.querySelector("#qty-total").innerHTML = sugarTrack + ccCount;
})

document.getElementById('minus-sugar').addEventListener('click', function(){
   document.querySelector("#qty-sugar").innerHTML = sugarTrack--
    document.querySelector("#qty-total").innerHTML = sugarTotal--;

})


// TODO: Hook up event listeners for the rest of the buttons
