//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {

    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }

    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } 
    else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } 
    else {
        return "Draw";
    }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {

    if ( !Array.isArray(weights)) {
        return "Invalid";
    } 
    
    let totalweight= 0 ;

     for (let i = 0; i < weights.length; i++) {
        totalweight += weights[i];
    }

    if (totalweight <= 400 ){
        return true ; 
    }else {
        return false;
    }
   


}



//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    
    if ( typeof tokensUsed !== "number" || tokensUsed < 0){
        return "Invalid";
    }
    if ( tokensUsed <= 500 ){
        return 0; 
    }
    else {
        let totalValues=  tokensUsed - 500;

        let cost = Math.floor(totalValues/100);

        return cost * 5;
    }

}


//Problem-04: Top Rated Restaurant Finder
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


//Problem-05: Debugging Challenge - API Response Time Monitor

function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length == 0) {
        return "Invalid";
   }
for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
        return "Invalid";
    }
}

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

  return total / times.length;
}


