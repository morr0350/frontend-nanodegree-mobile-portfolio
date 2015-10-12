frontend-nanodegree-mobile-portfolio
Tony Morrow   Project 4
===============================


Instructions:

## Viewing the site ##
1) Begin by navigating to index.html either locally or using pyhthon's SimpleHTTPServer to start a static server
and navigate to localhost with the port chosen

Summary of updates to index.html:

1) Base style.css was brought inline
2) Media query added to print.css to instruct browser to ignore
3) Minified perfmatters.js, although it is already a small file, and added async attribute to script tag
4) Google's analytics script is already minified, so just added async attribute to script tag
5) Reduced some image file sizes where appropriate


Summary of changes to pizza.html and related files:

1) Minified bootstrap.min.js
2) Style.css was brought inline
3) Added pizzasDiv variable to point to the randomPizzas div, rather than searching the DOM
   everytime through the pizzaElementGenerator loop
3) Removed dx calculation function from changePizzaSizes since the width of the container for
   random pizzas is always the same, so we can just use the width of the first container, then apply
   the percentage chosen using the slider to each pizza element width
4) Created moverItems array variable to store all the randomPizza ".mover" divs, rather than constantly
   querying the DOM for them
5) Batched assignment of new left value for each randomPizza to a second loop (using the stored
   array of ".mover" divs) separate from the first loop which calculates the new left value based on
   cyclic sine function of the current left value
6) Created movingPizzas variable to store the big container div for all the scroll-triggered moving
   pizzas, rather than querying the DOM for it every time through the DOMContentLoaded anon function
   event handler loop