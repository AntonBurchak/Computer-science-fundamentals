const initialArray = [1,53,0,5,2,12,8,7,6,99];
const log = (...args) => console.log(...args);


function quickSort(array, N = array.length) {
    const middle = array[Math.round((N - 1)/ 2)];
    let i = 0, j = N - 1;

    do {
        while (array[i] < middle) {
            i++;
        }
        while(array[j] > middle) {
            j--;
        }
    
        if (i <= j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

    } while(i < j);

    if ( j > 0 ) quickSort(array, j);
    if ( i > 0 ) quickSort(array, i);

    return array;
}

log(quickSort(initialArray));