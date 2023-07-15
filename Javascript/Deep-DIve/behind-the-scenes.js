const hobbies = ['Sports', 'Cooking']; //a pointer to the array is stored
const age = 26; // the value itself is stored

hobbies.push('Reading'); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping'] //not alloewd!


//Reference values : object
console.log(hobbies);

const person = { age: 26 };

function getAdultYears(p) {
    p.age -= 18;
    return p.age
    // return p.age - 18;
}
console.log(getAdultYears({ ...person }));
console.log(person);