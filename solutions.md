### jQuery Selector Challenge

Using jQuery:

``` javascript
var $el = $("#greeting");
var $el = $("div");
var $el = $("div#greeting");
// note that using the "$" in the variable name `$el` is just a naming convention, it indicates to you, dear reader, that the value of `$el` is a jquery `object` and has special jquery methods.
```

1. `$("#greeting").text(); // get "Hello There"`
2. `$("#greeting").text("Hola"); // set "Hola"`
3. `$("body").prepend("<h1>A Spanish Greeting</h1>");`
4. `$("body").append("<div>Que tal?</div>");`
5. `$("div").addClass("blue");`

---
Using Vanilla Javascript:

``` javascript
var el = document.querySelector("#greeting");
var el = document.querySelector("div");
var el = document.querySelector("div#greeting")
```

In the past you'd see alternative ways of grabbing DOM elements in javascript. *There is no good reason to use these any more*:

``` javascript
var el = document.getElementById("greeting");
var el = document.getElementByTagName("div");
var el = document.getElementByClassName("someclass")
```

1. `document.querySelector("#greeting").textContent; // get "Hello There"`
2. `document.querySelector("#greeting").textContent = "Hola"; // set "Hola"`
3.  
    ``` javascript
        var bodyEl = document.querySelector("body");
        bodyEl.innerHTML = "<h1>Hola</h1>" + bodyEl.innerHTML;
    ```
4.  
    ``` javascript
        var bodyEl = document.querySelector("body");
        bodyEl.innerHTML = bodyEl.innerHTML + "<div>Que tal?</div>";
    ```

5.
    ``` javascript
        // ahhhhhhhhhh
        var divEls = document.querySelectorAll("div");
        Array.prototype.slice.apply(divEls).forEach(function(el){
            el.classList.add("blue");
        })
    ```
