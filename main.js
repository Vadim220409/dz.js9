let car = {
    brand: "Toyota",
    year: 2018,
    color: black,
    model: "Camry",
    drive: function(){
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }
}

let student  = {
    firsName: "Vadim",
    secondName: "Kononenko",
    age: 13,
    grades: {
        Maths: 10,
        Physics: 10,
        Chemistry: 9,
        ComputerScience: 11,
        English: 9,
        Ukrainian: 10,
    },
    representation: function() {
        console.log(`Hi, my name ${this.firsName} ${this.secondName}. I am ${this.age}.`)
    }
}