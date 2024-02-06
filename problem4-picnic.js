function picnicBudget(participents){
if(typeof participents !== "number" || participents < 0){
    return "Participents shoud be an integer number";
}
else{
    let first100Cost = 0;
    let second101To200Cost = 0;
    let remainingCost = 0;
    let totalCost = 0;

    if(participents <= 100){
        first100Cost = participents * 5000;
        return first100Cost;
    }
    else if(participents <= 200){
        first100Cost = 5000 * 100;
        second101To200Cost = (participents - 100) * 4000;
        total = first100Cost + second101To200Cost;
        return total;
    }
    else{
        first100Cost = 5000 * 100;
        second101To200Cost = 4000 * 100;
        remainingCost = (participents - 200) * 3000;
        total = first100Cost + second101To200Cost + remainingCost;
        return total;
    }
}
    

}

console.log(picnicBudget(301));