//not using backpack in version one. progress determines door opening (3,6,9 correct question/answers respectively)

const router = require('express').Router();
const { Backpack } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

//get all items in backpack (testing purposes, will comment for production)
router.get('/', (req, res) => {
  Backpack.findAll({
    
  })
    .then(backpackData => res.json(backpackData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE FOR PUTTING KEY IN BACKPACK

router.post('/', (req, res) => {

  Backpack.create({
    user_id: req.body.user_id, //integer
    item: req.body.item //boolean
  })
    .then(backpackData => {
      res.json(backpackData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// GET ROUTE TO CHECK IF KEY EXISTS IF YES - GO FORTH
router.get('/check/:id', (req, res) => {
  Backpack.findOne({
    where: {
      user_id: req.params.id
    }
  })
  .then(backpackData => {
    if (!backpackData) {
      res.status(404).json({ message: 'This id does not possess an item/key' });
      return;
    }
    res.json(backpackData.item);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE ROUTE FOR DELETING KEY IN BACKPACK
router.delete('/:id', (req, res) => {
  Backpack.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(backpackData => {
      if (!backpackData) {
        res.status(404).json({ message: 'No backpack found with this id' });
        return;
      }
      res.json(backpackData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;