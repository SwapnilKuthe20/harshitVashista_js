
// what is __proto__ in js :::::

// In JavaScript, __proto__ is a property on objects that points to the prototype of the object.
//  It is part of the prototype chain mechanism, which is fundamental to JavaScript's inheritance model.

// @ Key Points About __proto__:

// # Prototype Chain -->

// Every JavaScript object has a hidden link to another object called its prototype.
// This link is stored in the __proto__ property.

// # Inheritance -->

// If you try to access a property or method on an object, JavaScript first looks for it on the object itself.
// If it doesn't find it, it follows the __proto__ chain to search on the prototype object, and so on,
// until it either finds the property or reaches null.

// # Usage -->

// __proto__ is not part of the standard ECMAScript specification but is widely supported in modern browsers for compatibility.
// The recommended way to access an object's prototype is through Object.getPrototypeOf().

// ----------------------------------------------------------------------------------------------------
// Use Object.create() --> to set an object's prototype during creation.
// ----------------------------------------------------------------------------------------------------

const voter = {
    isEligible() {
        return this.age >= 18 ? "Eligible" : "Not eligible";
    }
}

const voterInfo = {
    name: "Swapnil",
    age: 21
}

// console.log(voter);               // __proto__ not set
// console.log(voter.__proto__);     // __proto__ not set

// --------------------------------------------------------------------------
voter.__proto__ = voterInfo;
console.log(voter.__proto__);     // {name: 'Swapnil', age: 21}

// this is how we can set __proto__
// --------------------------------------------------------------------------
// but not recomended
// better way to set __proto__ is to set at the time of object creation
// by using Object.create(objectName)  this method 

// for eg :

const candidate = {
    name: "harshit",
    age: 23
}

const isEligibleExam = Object.create(candidate);

console.log(isEligibleExam);                // object set as proto
console.log(isEligibleExam.__proto__);      // object set as proto

// --------------------------------------------------------------------------

// Create function which create object :::

const isPass = {
    fullName: function () {
        return `${this.fName}  ${this.lName}`;
    },
    isPass() {
        return this.pass ? "pass" : "fail";
    }
}

function objCreate(fName, lName, age, grade) {
    const Student = Object.create(isPass);
    Student.fName = fName;
    Student.lName = lName;
    Student.age = age;
    Student.pass = grade;

    return Student;
}

const student1 = objCreate('harsh', 'Watkar', 22, true);
const student2 = objCreate('Arno', 'Bhattacharya', 26, false);

console.log(student1, '...student1');
console.log(student2, '...student2');

console.log(student1.fullName(), '...student1 full name');
console.log(student2.isPass(), '...student2 pass/fail');
// --------------------------------------------------------------------------

//  js me agr current obj me key nhi mili to wo __proto__ me jake dekhega
//  or wha se wo property access krega. 
// --------------------------------------------------------------------------

