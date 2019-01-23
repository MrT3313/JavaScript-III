/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL BINDING
    -When in global scope -- 'this' = window/console object

    -EX -- console.log(this);
* 2. IMPLICIT BINDING
    -When a function is called by a preceding dot / calling method -- 'this' = [object LEFT of dot]

    -EX -- 
        const person = {
            greeting: 'whats gucci fam?',
            name: 'bob',
            speak: function(otherName) {
                console.log(`yo ${otherName} its ${this.name}, ${this.greeting}`)
            }
        }

        person.speak('jacob');

* 3. NEW BINDING
    -When a constructor function is used -- 'this' = specific instance of the object that is created & returned by constructor function


    -EX --
        function Person(name) {
            this.greeting = 'whats gucci fam?',
            this.name = name,
            this.speak = function(otherName) {
                console.log(`yo ${otherName}, its ${this.name}, ${this.greeting}`)
            }
        }

        const BATMAN = new Person('BATMAN');
        const SPIDERMAN = new Person('SPIDERMAN');

        BATMAN.speak('JOKER');
        SPIDERMAN.speak('GREEN GOBLIN');

* 4. EXPLICIT BINDING
        -Override where 'this' is pointing        
            .bind
            .call
            .apply

        - EX --
            function Person(name) {
            this.greeting = 'whats gucci fam?',
                this.name = name,
                this.speak = function(otherName) {
                console.log(`yo ${otherName}, its ${this.name}, ${this.greeting}`)
            }
            }

            const BATMAN = new Person('BATMAN');
            const SPIDERMAN = new Person('SPIDERMAN');

            BATMAN.speak.call(SPIDERMAN);
            SPIDERMAN.speak.apply(BATMAN);

            BATMAN.speak('JOKER');
            SPIDERMAN.speak('GREEN GOBLIN');
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding