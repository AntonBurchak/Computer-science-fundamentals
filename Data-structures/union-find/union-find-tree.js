
class UnionTree {
    constructor(n) {
        this.nodes = [];

        for (let i = 0; i < n; i++) {
            this.nodes[i] = i;
        }
    }

    union(p, q) {
        const pRoot = this.root(p);
        const qRoot = this.root(q);

        this.nodes[qRoot] = pRoot;
    }

    root(p) {
        while (p != this.nodes[p]) {
            p = this.nodes[p];
        }
        return p;
    }

    isConnected(p, q) {
        return  this.root(p) == this.root(q);
    }

    print() {
        console.log(this.nodes);
    }   
}

const union = new UnionTree(10);

union.union(0, 2);
union.union(2, 3);
union.union(7, 9);
union.union(6, 8);
union.union(4, 6);
union.union(8, 9);

union.print()