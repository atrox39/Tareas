const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.post('/create', (req, res)=>{
    res.json(req.body);
});

module.exports = router;