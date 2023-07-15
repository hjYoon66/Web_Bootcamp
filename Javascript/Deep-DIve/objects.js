// const job = {
//     title: 'Developer',
//     location: 'Seoul',
//     salary: 300000
// };

// console.log(new Date().toISOString());

// const job2 = {
//     title: 'Cook',
//     location: 'Busan',
//     salary: 350000
// };

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`)

    }
}
const developer = new Job('Developer', 'Seoul', 30000);

developer.describe();
// console.log(developer);