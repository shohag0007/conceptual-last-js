 function anaToVori(Ana){
    if(typeof Ana !== "number" || Ana < 0){
        return "Please provide an integer number";
    }
    const Vori = Ana * 0.0625;
    return Vori;
 }

 console.log(anaToVori('7'));
