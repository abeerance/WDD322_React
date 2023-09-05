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
let favoriteActivities: (string | number)[];
favoriteActivities = ["Sports", 1];

// Dies ist  in object type
type productType = {
  // QUIZ: hier solltet den properties type zuweisen, sonst meldet typescript einen fehler
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};

const product: productType = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
