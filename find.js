let arr=[
    {id:28,name:"Atul",age:20},
    {id:38,name:"Karan",age:19},
    {id:22,name:"Amit",age:21}
]

let store = arr.find(function(val){
     return val.id == 28;
    
})

console.log(store)
