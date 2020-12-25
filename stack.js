/* Stack */

/* LIFO - Last in - First out */


class Stack {
    
    constructor(...elements) {
        this.stack = [...elements];
    }

    push(item) {
        if (item) {
            this.stack.push(item);
        }
        return this.stack;
    }

    pop() {
        this.stack = this.stack.slice(0, this.stack.length - 1);
        return this.stack;
    }
}

const stack = new Stack(1,2,3);

console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.pop());
console.log(stack.pop());