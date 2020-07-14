
// SOLUTION
// ===========

function getTotalX(a, b) {
    // Write your code here
    let num1= (Math.max(...a));
    let num2= (Math.min(...b));
    let divisors=[];
    
        
    for (let i=num1;i<=num2;i++){
        if((num2%i)===0){
            divisors.push(i);
        }
    }
     for (let k=0; k<divisors.length; k++){
            for(let j=0; j<b.length; j++){
                if((b[j])%(divisors[k])!= 0){
                    divisors.splice(k,1);
                    k--;
                }
            }
            
        }

       for(let i=0; i<a.length; i++){
           for(let m=0; m<divisors.length; m++){
               if((divisors[m])%(a[i])!= 0){
                   divisors.splice(m,1);
               }
           }
       }

       return divisors.length;
    
}


/*PROBLEM
==============
You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:
1.  The elements of the first array are all factors of the integer being considered
2.  The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.
For example, given the arrays  and , there are two numbers between them:  and . , ,  and  for the first value. Similarly, ,  and , .
Function Description
Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.
getTotalX has the following parameter(s):
• a: an array of integers
• b: an array of integers
Input Format
The first line contains two space-separated integers,  and , the number of elements in array  and the number of elements in array .
The second line contains  distinct space-separated integers describing  where .
The third line contains  distinct space-separated integers describing  where .
Constraints
• 
• 
• 
Output Format
Print the number of integers that are considered to be between  and .
Sample Input
2 3
2 4
16 32 96
Sample Output
3
Explanation
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/
