const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('', (req, res, next) => {
    try {
        return res.json({ items: Item.findAll() });
    } catch(err) {
        return next(err);
    }
});

router.post('', (req, res, next) => {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem});
    } catch(err) {
        next(err);
    }
});

router.get('/:name', (req, res, next) => {
    try {
        let foundItem = Item.find(req.params.name);
        return res.json({ item: foundItem });
    } catch(err) {
        next(err);
    }
});

module.exports = router;