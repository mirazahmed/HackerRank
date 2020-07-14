


// SOLUTION
// =============
function diagonalDifference(arr) {
    // Write your code here
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let invArrSize = arr.length-1;
    
    for (let i = 0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                
                firstDiagonal += arr[i][i];
                // secondDiagonal.push(arr[i][invArrSize]);
                secondDiagonal += arr[i][invArrSize];
                invArrSize--;

            }
        }

    return Math.abs(firstDiagonal - secondDiagonal);

}


/*The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
==============================================================================================
Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x

JavaScript (Node.js) */
