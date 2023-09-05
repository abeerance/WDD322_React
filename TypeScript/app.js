"use strict";
// const person: { name: string; age: number } = {
const person = {
    name: "Hadrian",
    age: 32,
    hobbies: ["Sports", "Cooking"],
};
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()); // !!! ERROR !!!, because map() is not available on type string
}
console.log(person.name);
// wir müssen explizit beim type assignement sein, sonst meldet typescript einen fehler
let favoriteActivities;
favoriteActivities = ["Sports", 1];
const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
