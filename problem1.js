function findLargest(values){
    if(!Array.isArray(values)){
        return "provide an Array";

    }
    else{
        let max = values[0];
        for(let i = 1; i < values.length; i++){
            if(typeof values[i] !== "number"){
                return "All values should be number";
            }else{

            }
            if(values[i] > max){
                max = values[i];
            }
        }
        return max;
    }
}

const numbers = [3, 12, 4, 0, "2", 53, 6];
console.log(findLargest(numbers));