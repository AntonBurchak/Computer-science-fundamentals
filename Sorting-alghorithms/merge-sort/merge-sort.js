const initialArray = [1,0,5,2,4,8,7,6,99];

// function merge(left, right) {
//     console.log(left, right);

//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...arr, ...left, ...right ]
// }

// function mergeSort(array) {
//     const half = array.length / 2
    
//     // Base case or terminating case
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)
//     return merge(mergeSort(left),mergeSort(array))
//   }


console.log(mergeSort(initialArray));

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