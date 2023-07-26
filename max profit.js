const best = prices => {
    let max = 0
    let low
  
    for (let i = 0; i < prices.length; i++) {
      if (low === undefined || prices[i] < low) {
        low = prices[i]
      }
  
      let diff = prices[i] - low
  
      if (diff > max) {
        max = diff
      }
    }
  
    return max
  }
  
  best([1, 2, 3, 4, 5])
  best([2, 3, 10, 6, 4, 8, 1])
  best([5, 4 , 3, 2, 1])