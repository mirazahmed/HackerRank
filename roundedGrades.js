// SOLUTION
// =======


function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    // let remainder = 0;
    for(let i=0; i<grades.length; i++){

        if ((grades[i] < 38) || (grades[i]% 5) < 3) {
            roundedGrades.push(grades[i]);
        }

        else {
            // if((grades[i]% 5) >=3)
                roundedGrades.push(grades[i] + (5 - (grades[i]% 5)));
            
        }
    }

    return roundedGrades;
}


/*PROBLEM
========
HackerLand University has the following grading policy:
•	Every student receives a  in the inclusive range from  to .
•	Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:
•	If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
•	If the value of  is less than , no rounding occurs as the result will still be a failing grade.
For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .
Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
Function Description
Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
gradingStudents has the following parameter(s):
•	grades: an array of integers representing grades before rounding
Input Format
The first line contains a single integer, , the number of students.
Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.
Constraints
•	
•	
Output Format
For each , print the rounded grade on a new line.
Sample Input 0
4
73
67
38
33
Sample Output 0
75
67
40
33

*/


