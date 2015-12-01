var Compliment = require("../models/compliment");
var complimentsController = {
  index: function(req, res){
    res.render('compliments/index.hbs', {
      compliments: Compliment.all()
    });
  },
  show: function(req, res){
    res.render('compliments/show.hbs',{
      compliment: Compliment.find([req.params.id])
    });
  },
  new: function(req, res){
    res.render('compliments/new.hbs');
  },
  create: function(req, res){
    // use model to create compliment
    var compliment = Compliment.create(req.body.compliment)
    // redirect to compliment
    res.redirect("/compliments")
  }
  // edit action code goes here...

 // update action code goes here...

 update: function(req,res){
   AuthorModel.findById(req.params.id, function(err, docs){
     docs.name = req.body.name
     docs.save(function(err){
       if(!err){
         res.redirect("/authors/" + req.params.id)
       }
     })
   })
 },

}

module.exports = complimentsController;
