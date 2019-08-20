/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
}
myObj.sayHello('Ryan')
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting =  'Hello';
    this.greeter = greeter;
    this.speak= function() {
        // - V1 - // 
            // console.log(this.greeting + this.greeter)
        // - V2 - // 
            return(`${this.greeting} ${this.greeter}`)
    }
}

const jerry = new CordialPerson('Newman')
const newman = new CordialPerson('Jerry')

console.log(jerry.speak())
console.log(newman.speak())

// Principle 4

// code example for Explicit Binding

const marko = new CordialPerson('polo')
const polo = new CordialPerson('marko')

console.log(marko.speak.call(polo))
console.log(polo.speak.apply(marko))