
class HashTable {
    constructor(size = 3) {
        this.table = Array(size);
    }

    hash(key) {
        let hash = 0;
        key = key.split('');

        key.forEach(symbol => {
            hash += symbol.charCodeAt(0);
        })

        return hash % this.table.length;
    }

    add(key) {
        const hashCode = this.hash(key);

        this.table[hashCode] = this.table[hashCode] || new LinkedList();

        this.table[hashCode].addToTheEnd(key);
    }

    get(key) {
        const hashCode = this.hash(key);
        const list = this.table[hashCode];

        if (list) {
            return list.getNodeByValue(key);
        } else {
            return false;
        }
    }

    remove(key) {
        const hashCode = this.hash(key);
        const list = this.table[hashCode];

        if (list) {
            list.removeNodeByValue(key);
        } else {
            return;
        }
    }
}

const table = new HashTable(10);

table.add('Anton Burchak - Junior JavaScript Developer');

const value = table.get('Anton Burchak - Junior JavaScript Developer');

console.log(value);

