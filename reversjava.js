let arr=[1,2,3,4,5];

function ArrayRevrsal(arr){


let revarr=[];


for (let i = arr.length -1 ; i >= 0 ; i--){
revarr.push(arr[i]);

}
return revarr;
}
let reversed = ArrayRevrsal(arr);
console.log(reversed);



