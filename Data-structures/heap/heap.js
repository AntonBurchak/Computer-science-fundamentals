
Array.prototype.swap = function(a, b) {
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;

    return this;
}

class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        if (this.heap.length == 0) this.heap.length = 1;
	
        this.heap.push(value);

        this.swim(this.heap.length);
    }

    swim(k) {
        let current = k - 1;
        let parent = Math.floor(current / 2);

        while (this.heap[parent] < this.heap[current] && current > 1) {
            this.heap.swap(current, parent);

            current = parent;
            parent = Math.floor(parent / 2);
        }   
    }

    getMax() {
        return this.heap[0];
    }

    print() {
        console.log(this.heap.slice(1, this.heap.length));
    }
}

const heap = new BinaryHeap();
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(6);
heap.insert(5);
heap.insert(7);
heap.insert(4);
heap.insert(8);
heap.insert(10);
heap.insert(9);

heap.print();



