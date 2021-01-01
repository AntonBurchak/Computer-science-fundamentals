
function merge(left, right) {
    const arr = [];

    while(left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const mid = Math.ceil(array.length / 2);

    if (array.length < 2) {
        return array;
    } else {
        const left = array.splice(0, mid);
        return merge(mergeSort(left), mergeSort(array));
    }
}

const initialArray = [1,0,5,2,4,8,7,6,99];
const sorted = mergeSort(initialArray);

console.log(sorted);