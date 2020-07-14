// SOLUTION
// =======

function timeConversion(s) {
    let newString = '';
    let hour = 0;
    if((s.substring(8)==="PM") && (s.substring(0,2) != '12')){
        hour = 12 + parseInt(s.substring(0,2));
        newString = hour + (s.substring(2,8));
    }
    else if ((s.substring(8)==="PM") && (s.substring(0,2) === '12')){

        newString = (s.substring(0,8));
     }

    else if ((s.substring(8)==="AM") && (s.substring(0,2) === '12')){
        newString = '00' + (s.substring(2,8));
    }

    else if ((s.substring(8)==="AM") && (s.substring(0,2) != '12')){
        newString = (s.substring(0,8));
    }

    return newString;
}


/*PROBLEM
========
Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
•	s: a string representing time in  hour format
Input Format
A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
Constraints
•	All input times are valid
Output Format
Convert and print the given time in -hour format, where .
Sample Input 0
07:05:45PM
Sample Output 0
19:05:45
*/