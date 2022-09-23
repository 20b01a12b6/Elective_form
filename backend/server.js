const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser')
const cors=require('cors')
// const multer=require('multer')
const path=require('path')
app=express()
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    database:"student_verification"
});

db.getConnection((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database connected");
    }
});

app.get("/",(req,res)=>{
    console.log("started")
})
// var storage=multer.diskStorage({
//     destination:(req,file,callBack)=>{
//         callBack(null,'./images/')
//     },
//    filename:(req,file,callBack)=>{
//     callBack(null,file.originalname)
//    }

// })
// var upload=multer({
//     storage:storage
// });
// app.post("/upload", upload.single('image'), (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         var imgsrc = 'http://localhost:3001/images/' + req.file.filename
//         var insertData = "INSERT INTO student1(file)VALUES(?)"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
// })

app.get("/report",(req,res)=>{
    console.log("Getting data from db");
    db.query(`select * from studentelective_it where phno!=0`,(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
});
app.get("/report1",(req,res)=>{
    console.log("Getting data from db");
    db.query(`select * from studentelective_cse where phno!=0`,(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/login', function(req, res) {
    let sid = req.body.sid;
    let sname = req.body.sname;
    const q='select * from stu_verifyit where sid=? and sname=?'
db.query(q,[sid,sname],function(err,result){
    if (err){
        res.send({err:err})
    }
    else{
       if(result.length>0){
        res.send(result)
        console.log(result)
       }
       else{
        res.send({message:"invalid user"})
       }
    }
})
    
});
app.post('/logincse', function(req, res) {
    let sid = req.body.sid;
    let sname = req.body.sname;
    const q='select * from stu_verifycse where sid=? and sname=?'
db.query(q,[sid,sname],function(err,result){
    if (err){
        res.send({err:err})
    }
    else{
       if(result.length>0){
        res.send(result)
        console.log(result)
       }
       else{
        res.send({message:"invalid user"})
       }
    }
})
})
app.post("/eform",(req,res)=>{
    const {userName,name1,email,phone,subject1,subject2}=req.body;  
    console.log(req.body)
    console.log(userName)
    console.log(name1)
    console.log(email)
    console.log(subject1)
    // console.log(subject2)
    var sql=`update studentelective_it set sname1=?,mail=?,phno=?,Es1=?,Es2=? where sid1=?`;
    db.query(sql,[name1,email,phone,subject1,subject2,userName],(err,result)=>{
            
            if (err)  throw err;
            else{
                console.log(result)
            }
    })
 
 })
 app.post("/eform1",(req,res)=>{
    const {userName,name1,email,phone,subject1,subject2}=req.body;  
    console.log(req.body)
    console.log(userName)
    console.log(name1)
    console.log(email)
    console.log(subject1)
    // console.log(subject2)
    var sql=`update studentelective_cse set sname1=?,mail=?,phno=?,Es1=?,Es2=? where sid1=?`;
    db.query(sql,[name1,email,phone,subject1,subject2,userName],(err,result)=>{
            
            if (err)  throw err;
            else{
                console.log(result)
            }
    })
 
 })







 

app.listen(3001,()=>{
    console.log("Server listening!!!!");
});