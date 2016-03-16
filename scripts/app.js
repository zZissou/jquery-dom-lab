'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
  $("#greeting").text(); // get "Hello There"

  // 2. Change (or set) the value to "Hola".
  $("#greeting").text("Hola"); // set "Hola"

  // 3. Add an h1 to the page that says "A Spanish Greeting".
  $("body").prepend("<h1>A Spanish Greeting</h1>");

  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
  $("body").append("<div>Que tal?</div>");

  // 5. Add the class "blue" to both greetings.
  $("div").addClass("blue");

});
