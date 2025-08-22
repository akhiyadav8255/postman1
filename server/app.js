import express from "express";

const app = express();

app.use(express.json()) //This line imp for post,put,delete api's and not for GET

const PORT = 5002;

/**
 * 1. Simple root route
 */

app.get("/", (req, res) => {
  res.send("hello server");
});

app.get("/global", (req, res) => {
  res.send("Hello Global Server");
   
});


app.post("/register",(req,res)=>{
   res.send("This is register page");
   console.log("register")

});

app.post("/students/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id)
    res.json(id)
})


//req.params


// Start server

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});