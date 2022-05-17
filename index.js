// code your solution here
function saturdayFun(activity = "roller-skate"){
    
    return(`This Saturday, I want to ${activity}!`);
}
function mondayWork(activity = "go to the office"){
    
    return(`This Monday, I will ${activity}.`);
}
function wrapAdjective(input = "special"){
    const flair = function(input2 ="*"){
        return(`You are ${input}${input2}${input}!`);
    }
return(flair);
}