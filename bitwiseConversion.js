function getMaxLessThanK(n,k){
   
    let max = 0;
    let bitWiseAnd = 0;
    for (let i = 1; i < n; i++) {
        
        for (let j = i + 1; j <= n; j++) {
            
             bitWiseAnd = i & j;
            
            if (bitWiseAnd < k && max < bitWiseAnd) {
                max = bitWiseAnd;
            }
        }
    }
    
    return max;
}
    


 // PROBLEM:
 // ==========
 // Find max number of all the numbers between 1 to n, where max less than k.