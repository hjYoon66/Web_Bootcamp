let userName="Yoon";
let age=26;
let hobbies=['Sports','Cooking','Reading'];
let job={
    title:'Developer',
    place:'Seoul',
    salary:50000
};
let totalAdultYears;
function calculateAdultYears(userAge){
    return userAge-18;
}

totalAdultYears=calculateAdultYears(age);
console.log(totalAdultYears);
age=45;
totalAdultYears=calculateAdultYears(age);
console.log(totalAdultYears);

let person={
    name:'Yoon',  //Property    
    greet(){    //Method
        console.log('Hello!');
    }
};

person.greet();