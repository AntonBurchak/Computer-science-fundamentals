
class QuickFind {
    constructor(n) {
        this.nodes = [];

        for (let i = 0; i < n; i++) {
            this.nodes[i] = i;
        }
    }

    union(p, q) {
        const pNode = this.nodes[p];
        const qNode = this.nodes[q];

        for (let i = 0; i < this.nodes.length; i++) {
            
            if (this.nodes[i] === qNode) {
                this.nodes[i] = pNode;
            }
        }

        return this.nodes;
    }

    isConnected(p, q) {
        return this.nodes[p] === this.nodes[q];
    }

    print() {
        console.log(this.nodes);
    }
}

const union = new QuickFind(10);


union.union(0, 2);
union.union(2, 3);
union.union(7, 9);
union.union(6, 8);
union.union(4, 6);
union.union(8, 9);

union.print()