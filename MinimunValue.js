function MinimumValue(){
const array = [10 , 15 , 8 , 6 , 12 ,1]; 
    let result = array[0];
    let minimum_num=0;
    for (let num=0; num < array.length ; num++){
    if (array[num] < result)
    {
      minimum_num=array[num];
    }
    }
    console.log("this is the smallest number: "+minimum_num);
}
MinimumValue();
