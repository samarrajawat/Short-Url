const shortid = require('shortid')
const URL = require('../models/url')

async function generateNewShortURL(req,res){
  const body = req.body;
  if(!body.url) return res.status(400).send('url is required')

    let existingEntry = await URL.findOne({ redirectUrl: body.url });
    if (existingEntry) {
      return res.render('home', { id: existingEntry.shortId });
    }

    const shortID = shortid(8);
  await URL.create({
   shortId : shortID,
   redirectUrl : body.url,
   visetedHistory : [],
   createdBy : req.user._id
  })
  return res.render('home',{id : shortID})
}

async function redirectToPage (req,res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({shortId},{$push : {
        visetedHistory:{
            timestamp : Date.now()
        }
    }}
)

 return res.redirect(entry.redirectUrl);
}

async function handleTotalClicks(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    if (!result) {
        return res.status(404).json({ error: 'Short URL not found' });
      }
    res.json({
         TotalClicks: result.visetedHistory.length,
        analytics : result.visetedHistory,
    })
}

module.exports={
    generateNewShortURL, redirectToPage ,handleTotalClicks 
}