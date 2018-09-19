# Wather app

*Build a website that shows the real-time weather for a location of your choice*

## Main task

* the name of the city
and its weather are displayed on the page, and that it’s deployed somewhere where evaluators can
access the running application.

* Free design and free [weather APIs](https://openweathermap.org/)

## Specifics for my the site:

1. Display the weather for your current location
2. Allow you to choose the city you’re getting the weather from
3. Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
4. Be built using JavaScript and node.js

Additionally the site imho should:
1. Be accessible
2. Be responsive
3. Be server-side rendered
4. Be progressively enhanced
5. Be deployed on Heroku
6. Be performant over 3G networks
7. Work offline
8. have TDD


# Tutorial of how I have approached this personal project:

I first plan the main goals and the addictional goals, then I start to plan my design (look for inspirations), I looks for the api documentation, and I started to work on getting the data from the API itself (that imho was the most important thing). I create a URL and add the right parameter, add the key API.

2. Allow you to choose the city you’re getting the weather from

I create in my index.html file a section with a button and an input tags(I used an IDs to be able specifically to select them). I wrapped my button inside a variable and use the *preventDefault()* function in order to be able to store the city name (or anything else) the user will write in the input tag and be able to use it in my app.js file.

Then I rewrite the variable cityName with the user'input stored and applied it as a parameter in URL. This URL with then be passed as a parameter in the *getData()* function which is going to fetch the data for us and that will display then this data.

1. Display the weather for your current location

I used *navigator.geolocation.getCurrentPosition* and once I got the latitudine and the logitude of the current user position I passed those values as parameters in a new URL I created and passed it the fecth API.


3. Not rely on client-side frameworks
4. Be built using Vanilla JavaScript
5. A bit responsive (I don't have a lot of content) - mobile first

In order to make my app responsive I used *Media query*, which is a CSS technique introduced in CSS3.
It uses the **@media** rule to include a block of CSS properties only if a certain condition is true.

* in the end I refactored a bit the code trying to follow the DRY (do not repeat yourself) principle.

## Design
* Headline at the top
    * Show **name's location**
    * Show **local time (and day)**
* Show **Weather**: Animated weather image under the headline
* The current **local temperature** will be displayed **in celsius** (default)

* A **search box** for seacrhing the weather in other locations

* extra info current weather
    * wind
    * humidity

* extra
    * Forecast weather

* **Footer** for credit and links

## Behaviour

* The page ask for access the user's location to update the weather info
* The headline update to reflect the current location
* User can search for the weather's condictions of other locations
* The animated image change depending on the location's weather conditions.

### tips:

* HTML5 Geolocation

Credit and ispiration:

* Icons made by [freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com [flaticon](https://www.flaticon.com/)
* [openweathermap](https://openweathermap.org/)
* [font-awesome](https://fontawesome.com/)

# Do you want to see my app working?

[check here my app!](https://awesome-keller-47ea35.netlify.com)