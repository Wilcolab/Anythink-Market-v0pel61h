const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
 router.get("/", (req,res
  ) =>{
    Comment.find()
    .then((comments)=>{
        res.json(comments);
    })
    .catch((err)=> {
        console.log(err);
    });
  }
// add another endpoint for deleting a comment

router.delete("/:commentId", (req,res,next)=> {
    Comemnt.findByIdAndRemove(req.params.CommentId)
    .then(()=>res.sendStatus(200))
.catch(next);
});