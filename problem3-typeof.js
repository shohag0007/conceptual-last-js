function pandaCost(singara, samucha, jilapi){
   
    if(typeof singara !== "number" || typeof samucha !== "number" || typeof jilapi !== "number"){
        return " Please provide an integer number to get the food items price";
    }

    else{
        const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total = singara * singaraPrice + samucha * samuchaPrice + jilapi * jilapiPrice;
    return total;
    }

}

console.log(pandaCost(10, 5, 4));



