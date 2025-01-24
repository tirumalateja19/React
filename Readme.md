Api's
https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null

https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&collection=83907&tags=layout_CCS_Coffee&sortBy=&filters=&type=rcv2&offset=0&page_type=null

https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4989841&lng=78.4176358&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null

api fetch code:

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4989841&lng=78.4176358&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();
console.log(json);
SetListOfRestaurants(data.all_country_code[0]);

};
