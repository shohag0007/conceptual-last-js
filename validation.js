/*
 function add(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        return "Please give me a number";
    }
    return x + y;
 }

//  const result = add(5);  // console.log(add(5,5));
//  console.log(result);
 
 */
 function details(info){
    if(typeof info !== "object"){
        return " You have to give object";
    }else if(!info.name || !info.age){
        return "Object must contain name and age property";
    } 
    else if(typeof info.name !== "string" || typeof info.age !== "number"){
        return "Name should be string and age should be a number"
    }
    else if(info.age <= 0){
        return "Age should be positive number";
    }

    return `My name is : ${info.name}. My age is : ${info.age}`;
    
 }

 console.log(details({name:"shohag", age: 35}));







