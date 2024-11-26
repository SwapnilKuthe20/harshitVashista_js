
// __proto__ : is the reference jo chain hmne create kri uska
//  prototype : is a simple object


// Prototypes in Functions :::

//  Functions in JavaScript have a prototype property, which is not the same as __proto__.
//  The prototype property of a function is used,
//  to define methods that instances of the function's constructor will inherit.

// prototype is only provided by functions.


function addFunction() {
    console.log("hello");
}

console.log(addFunction);           // fn defination
console.log(addFunction.name);      // fn name

//  in js fn is treated as like object
//  fn provideds more usefull properties.
// ------------------------------------------------------------------------------------
// We can add our custom property in function ::
addFunction.customProperty = "Custom prop created";

console.log(addFunction.customProperty);     // Custom prop created

// ------------------------------------------------------------------------------------
// ::  prototype :: how to access / print 

console.log(addFunction.prototype);     // {}

//  We can add key : value pair in prototype

addFunction.prototype.greet = "Hello from prototype";
addFunction.prototype.byeFunction = function () {
    console.log("B-bye");
};

console.log(addFunction.prototype.greet);
console.log(addFunction.prototype.byeFunction());

// ------------------------------------------------------------------------------------

//  We can connect prototype and __proto__ ::

function createMobObj() {
    
    const mobileObj = Object.create(createMobObj.prototype);
    mobileObj.name = "Realme",
    mobileObj.price = 12000
    
    return mobileObj;
}

createMobObj.prototype.model = function () {
    return "15s";
};

console.log(createMobObj());
console.log(createMobObj.prototype.model());

// ------------------------------------------------------------------------------------















