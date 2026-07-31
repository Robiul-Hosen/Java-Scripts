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
console.log(calculateAiCost('1000'));