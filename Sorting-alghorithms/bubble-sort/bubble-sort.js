const initialArray = [9,3,4,7,2,-2,-64,76,32,55,18,5,11,21];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp; 
            }
        }
    }

    return array;
}

console.log(bubbleSort(initialArray));