const express = require('express');
const router = express.Router();
const Games = require('../Model/games');

// get all
router.get('/games', async(req,res)=>{
    try {
  const games = await Games.find();
res.json(games);

    } catch (err) {
        console.error(err);
    }
});

// post
router.post('/games', async(req,res)=>{
    const game = new Games({
        name:req.body.name,
        gameType:req.body.gameType,
        price:req.body.price        
    })

  try {
   const g1= await game.save();
   res.json(g1);
  } catch (err) {
    res.send(err)
  }
});

// by id
router.get('/games/:id', async(req,res)=>{
    try {
  const game = await Games.findById(req.params.id);
res.json(game);

    } catch (err) {
        console.error(err);
    }
});

router.patch('/games/:id', async(req,res)=>{

    try {
        const game = await Games.findById(req.params.id);
        game.price = req.body.price;
        await game.save();
        res.send(game);
        
    } catch (err) {
        console.log(err);
    }
});

router.delete('/games/:id', async (req, res) => {
    try {
        const game = await Games.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        await game.deleteOne();
        res.json({ message: 'Game deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;