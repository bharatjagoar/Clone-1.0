
const passport = require("passport");
const localstrategy = require("passport-local").Strategy;
const UserDb = require("../model/newUser")


passport.use(new localstrategy({
    usernameField:"email"
},function(username,password,done){
    console.log("fdsafdsafdsafsda")
    UserDb.findOne({userUnique:username},function(err,user){
        if(err){
            console.log("err from passport LOCAL STRATEGY !! ")
            return done(err)
        }
        if(!user){
            console.log("user not found")
            return done(null,false) 
        }
        if(req.body.userUnique!=password){
            console.log("password didnt match !!")
            return done(null,false)
        }
        return done (null,user)
    })
}))

passport.CheckAuthenticatedUser=(req,res,next)=>{
    if(req.isAuthenticated()){
        
        return next()
    }
    return res.redirect("back")
}


passport.setAuthenticatedUser=(req,res,next)=>{
    // console.log(req.user,"bharat jagoar")
    if(req.isAuthenticated()){
        res.locals.user= req.user
        // console.log(res.locals.user,"winodws10pro")
    }
    return next();
}

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err){
            console.log("🤳🎉🤳🤳🤳🤳")
            return done(err, user);
        }
        return done(null,user)
        
    });
  });


  module.exports = passport;