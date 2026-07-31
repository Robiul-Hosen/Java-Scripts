function topRatedRestaurant(restaurants) {
    if ( !Array.isArray(restaurants)  || restaurants.length == 0) {
           return "Invalid";
    } 

   let goodRestaurant = restaurants[0] ; 
    for(let i=0 ; i< restaurants.length; i++){
        if(restaurants[i].rating > goodRestaurant.rating){
            goodRestaurant = restaurants[i];
        }
    }
    return goodRestaurant.name.toUpperCase()
    
}

let arr = topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]);
console.log(arr);