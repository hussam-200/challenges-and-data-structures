function RemoveMiddleValue(){

let Array=[1,2,3,4,5]
let newarray=[];
let middlenum;
let index=0;

if(Array.length%2 == 0){
  middlenum=(Array.length)/2;
  }
if(Array.length%2==1){
  middlenum=(Array.length+1)/2
}

for(let i=0;i<Array.length;i++){
if(i !== middlenum){
  newarray[index]=Array[i];
  index ++;
}


}
return newarray;
}
let result = RemoveMiddleValue();
console.log(result)
