const express=require("express");
const app=express();
const PORT=3000;
const exampleData=[
    {
        id:1,
        name:"Zhang",
        age:20
    },
    {
        id:2,
        name:"Guan",
        age:21
    }
];
app.length('/api/data',(req,res) =>{
    res.json(exampleData);
});
app.listen(PORT,() =>{
    console.log('Sever running on port ${PORT}');
});
