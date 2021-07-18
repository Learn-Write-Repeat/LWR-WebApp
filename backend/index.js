require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ! import blog schema
const Blog = require("./models/blog");

const port = 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// ! DB Connection
const URI = process.env.DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));



// ! ------------------Routes------------------

// ! Home route 
// !This is where all the blogs will be displayed with latest blogs at the top

app.get("/",function(req,res){
  Blog.find().sort({createdAt: -1})
  .then(function(result){
    res.json(result);
  })
  .catch(function(err){
    console.log(err);
  });
})


// ! For creating a new blog
app.post("/",function(req,res){
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    thumbnail: req.body.thumbnail
  });
  blog.save()
    .then(function(result){
      res.send("Saved");
      console.log(result);
    })
    .catch(function(err){
      console.log(err);
    });
})

// ! For view a particular blog
app.get("/:id",function(req,res){
  const id = req.params.id;
  Blog.findById(id)
  .then(function(result){
    res.json(result);
  })
  .catch(function(err){
    console.log(err);
  });
})

// ! For updating a particular blog
app.put("/:id", function(req,res){
  const id = req.params.id;
  Blog.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
      .then(function(result){
        res.json({ messege: "Updated "});
        console.log(result);
      })
      .catch(function(err){
        console.log(err);
      });
})

// ! For deleting a particular blog
app.delete("/:id",function(req,res){
  const id = req.params.id;
  Blog.findByIdAndRemove(id,{useFindAndModify: false})
      .then(function(result){
        res.json(result);
      })
      .catch(function(err){
        console.log(err);
      });
})

app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`);
});
