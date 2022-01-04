let person: {
    name: string;
    age: number;
    gender: string;
    hobbies: string[];
    roles: [number, string];
} = {
    name: "",
    age: 0,
    gender: "",
    hobbies: ["playing", "cooking"],
    roles: [20, "admin"],
};

person.name = "john doe";
person.age = 23;
person.gender = "male";

console.log(person);

let activities: string[];
activities = ["playing", "3"];
console.log(activities);

enum Roles {
    ADMIN,
    SELLER,
    BUYER,
}
