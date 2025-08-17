let arr=[
    {name:"atul",age:21},
    {name:"Sumit",age:19},
    {name:"Karan",age:20}
]
 
let store=arr.some(function(val){
    return val.age>20
})

function value(store){
   if(store){
    console.log("somone in this  are abel for DL")
   }
   else{
    console.log(" not abel")
   }
}
value(store)