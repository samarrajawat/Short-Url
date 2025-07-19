const express = require('express')
const {generateNewShortURL,redirectToPage,handleTotalClicks  } = require('../controlers/url')
const router = express.Router();

 router.post('/',generateNewShortURL)

 router.get('/:shortId',redirectToPage )

 router.get('/analytics/:shortId',handleTotalClicks )

 module.exports = router;