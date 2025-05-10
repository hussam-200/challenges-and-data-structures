let arr = [1,1,2,2,3,3,3,1,1,5,5,6,7,8,2,1,1];
const frequncymap= {};
let maxcount = 0;
let result = arr[0];

for (let num of arr){
frequncymap[num] = (frequncymap[num] || 0) + 1;
if (frequncymap[num] > maxcount){
    maxcount = frequncymap[num];
    result = num;
}
}
console.log("the most frequnt number : ", result )



