//FOR
//  "i" is the variable
//for loop will run until "i" on the left is less then 10 which is 9
console.log("For Loop Starts");
for (let i = 0;i < 10;i++){
    console.log(`For Loop Number: ${i}`);
}
console.log("For Loop Ends");

//While
console.log('While Loop Starts');

//differece between while and for Loop is we set the variable outside the condition
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++; //make sure you incriment "i" like this or it would be a never ending loop
    //because the condition would never meet
}
console.log('While Loops Ends')

//Adding arrays with object to show how loop can be run with object length

const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompleted:true
    },
    {
        id:3,
        text: 'Dentist Appt',
        isCompleted:false,
    }

];
console.log('Looping throught array using for START');
for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
}
console.log('Looping throught array using for END');

console.log('A Much better way START');
//Now a much better way to loop through an array
for(let todo of todos){ //todo is equal to todos 
    console.log(todo.id);  //the ID value in the array is being printed
}
console.log('A Much better way END');


//forEach loops thorugh the arrays
//map creates array from array
//filter create array based on condition
console.log('Beganing of a forEach loop');
todos.forEach(function(todo){
    console.log(todo.text);
});
console.log('End of a forEach loop');
//map returns an array
console.log('Start of a MAP loop');
const todoText = todos.map(function(todo){
    return todo.text;
});
//this loop creates an array of text in todo array
console.log(todoText);
console.log('END of a MAP loop');

console.log('START Filter loop');
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);
console.log('END Filter loop');

//this is what we call functional programming we can create array with filtered
//mix and match loops and function according to our needs
console.log('Functional Programming Loop Filter + map Start');
const todoCompletedFun = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedFun);
console.log('Functional Programming Loop Filter + map End');
