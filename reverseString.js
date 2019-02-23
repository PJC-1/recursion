// Write a function that reverses a string. The input string is given as an array of characters char[].
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// You may assume all the characters consist of printable ascii characters.
//
//
//
// Example 1:
//
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
//
// Example 2:
//
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
    // call helper function, with parameters starting from the begining of the array and ending at the last element
    helper(0, s.length - 1, s);
}

// helper function that will reverse the elements of the passed in array
function helper(start, end, arr) {
    // exit condition
    if(start >= end) {
        // logging the arr to the console
        console.log(arr);
        // exit the function
        return;
    }

    // switch the first position with the last posision
    // cache the start position's value into a storage variable
    var temp = arr[start];
    // set the start position to the end position's value
    arr[start] = arr[end];
    // set the end position to the temp's value
    arr[end] = temp;

    // call helper function with incremented start value and decremented end value
    helper(start + 1, end - 1, arr);
}

// outputs [ 'o', 'l', 'l', 'e', 'h' ]
reverseString(['h','e','l','l','o']);
