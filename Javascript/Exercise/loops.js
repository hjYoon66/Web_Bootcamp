for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Yoon', 'Park', 'Lee'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = { //for...in 객체에서 사용
    name: 'Yoon',
    age: 26,
    isAdmin: true
};
for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

let isFinished = false;
while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}
console.log('Done!');