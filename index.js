const arr = [12, 22, 13, 2, 99, 22, 10, 23, 7]

let max = arr[0]
let min = arr[0]
let res = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i] 
    } 
    if(arr[i] > max) {
        max = arr[i] 
    }
    res += arr[i]
}

let avg = (res / arr.length)

console.log("Nilai Min = "+min)
console.log("Nilai Max = "+max)
console.log("Nilai Avg = "+avg)