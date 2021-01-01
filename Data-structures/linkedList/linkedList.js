/* 'esversion: 6' */

        /* Linked list */
/* =========================== */

/* Interface */
/*
    addToTheEnd() 
    insertInPosition() 
    getNodeByPosition() 
    removeFromPosition() 
    changeAtPosition()

    get size() 
    get head() 
    get tail() 

    print() 
*/


/* List example */
/* 
    const example = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
*/


class LinkedList {
    constructor(...elements) {
        this.list = {};
        this.current = {};

        if (elements) {
            elements.forEach(item => this.addToTheEnd(item));
        }
    }

    addToTheEnd(value) {
        this.tail.next = {
            value,
            next: null
        }
    }

    changeAtPosition(position, value) {
        if (position > this.size) {
            console.error(`Error: wrong position number. Must be equal or lower than list size (${this.size})`);
        } else {
            this.current = this.list;
            let counter = 0;
        
            while(this.current.next) {
                ++counter;
                this.current = this.current.next;

                if (counter === position) {
                    this.current.value = value;
                    break;
                }
            }
        }
    }

    insertInPosition(position, value) {
        this.insertBeforePosition(position - 1, value);
    }

    insertBeforePosition(position, value) {
        let firstPart = this.list;
        let secondPart = this.list;
        let counter = 0;

        while (counter < position) {
            counter++;
            firstPart = firstPart.next;

            if (counter === position) {
                let counterInner = 0;

                while (counterInner < position) {
                    counterInner++;
                    secondPart = secondPart.next;
                }
            }
        }

        firstPart.next = {
            value,
            next: {...secondPart.next}
        }
    }

    removeFromPosition(position) {
        this.removeInPosition(position - 1);
    }

    removeInPosition(position) {   
        let firstPart = this.list;
        let secondPart = this.list;
        let counter = 0;

        while (counter < position) {
            counter++;
            firstPart = firstPart.next;
            if (counter === position) {
                let counterInner = 0;
                
                while (counterInner < position) {
                    counterInner++;
                    secondPart = secondPart.next;
                }
            }
        }

        firstPart.next = secondPart.next.next;
    }

    getNodeByPosition(position) {
        this.current = this.list;
        let counter = 0;
        
        while (this.current) {
            counter++;

            this.current = this.current.next;

            if (counter === position) {
                return this.current.value;
            }
        }
    }

    getNodeByValue(value) {
        this.current = this.list;
        
        while (this.current.next) {
            this.current = this.current.next;

            if (this.current.value === value) {
                return this.current.value;
            }
        }
    }

    removeNodeByValue(value) {
        this.current = this.list;
        let counter = 0;
        
        while (this.current) {
            counter++;

            this.current = this.current.next;

            if (this.current.value === value) {
                this.removeFromPosition(counter);
                break;
            }
        }
    }

    print() {
        this.current = this.list;

        while (this.current) {
            console.log(this.current.value);
            
            this.current = this.current.next;
        }
    }

    get size() {
        this.current = this.list;
        let size = 0;

        while (this.current.next) {
            ++size;
            this.current = this.current.next;
        }

        return size;
    }

    get head() {
        return this.list.value;
    }

    get tail() {
        this.current = this.list;

        while(this.current.next) {
            this.current = this.current.next;
        }

        return this.current;
    }
}

// const list = new LinkedList(1,2,3,4,5);



// list.insertInPosition(1, 3213);

// list.getNodeByPosition(4);
// list.removeFromPosition(6);
// list.changeAtPosition(12, 1);
// list.print();

