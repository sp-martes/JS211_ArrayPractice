let cars = ['Ford', 'Subaru', 'Aston Martin', 'Tesla'];

console.log('cars length:' , cars.length);

let moreCars = ['BMW', 'Nissan', 'McLaren', 'Honda' ];

let totalCars = cars.concat(moreCars);

console.log('total cars:', totalCars);
console.log('index of honda:', totalCars.indexOf('Honda'));
console.log('index of ford:', totalCars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join();

let carsFromString = stringOfCars.split(',');

let carsInReverse = totalCars.reverse();

let alpha = carsInReverse.sort();
console.log('cars alphabetical:' , alpha);

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];

let removedReptiles = pets.splice(4,5,'hamster');

let removedPet = pets.pop();

pets.push(removedPet);

let firstPet = pets.shift();

pets.unshift('turtle');

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

function addTwo(num){
  return num + 2
}

numbers.forEach((num, index) => {
    numbers[index] = addTwo(num)});

console.log('added 2:' , numbers);
