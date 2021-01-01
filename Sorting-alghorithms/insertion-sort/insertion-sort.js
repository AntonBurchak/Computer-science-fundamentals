
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {  
        for (let j = -1; j < i; j++) {
            if (array[i] < array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

const initialArray = [9,3,4,7,2,-2,-64,76,32,55];
const sorted = insertionSort(initialArray);

console.log(sorted);