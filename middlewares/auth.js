const {getUser} = require('../service/auth')

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookies.uid;

    if(!userUid) return res.redirect('/login')
   const user = getUser(userUid)

    if(!user) return res.redirect('/login')
        req.user= user;
        next();
    }

    async function checkAuth(req,res,next){
        const userUid = req.cookies.uid;
       const user = getUser(userUid)
    
            req.user= user;
            next();
    }
    function restrictTo(roles=[]){
        return function(req,res,next){

            if(!req.user) return res.redirect('/login')
        
                if(!roles.includes(req.user.role)) return res.end('unauthorized')
    
                    return next();
            }
    }
    module.exports={
        restrictToLoggedinUserOnly,checkAuth,restrictTo
    }