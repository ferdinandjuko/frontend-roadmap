import { faker } from '@faker-js/faker';

const randomName = faker.name.findName(); 
const randomEmail = faker.internet.email();
const randomAnimals = faker.animal.type()

console.log(randomName);
console.log(randomEmail);
console.log(randomAnimals);