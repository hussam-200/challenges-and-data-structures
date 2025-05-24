function ReverseCharacters(name){

let revers="";
    for (let i=name.length-1;i>=0;i--){
         revers=revers+name[i];
    }
return revers;
};
console.log(ReverseCharacters("javascript"));
