const initialArray = [9,3,4,7,2,-2,-64,76,32,55,18,5,11,21];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(selectionSort(initialArray))