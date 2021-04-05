const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await User.findAll().catch((err) => { 
    res.json(err);
  });
    const users = userData.map((project) => project.get({ plain: true }));

  res.render('homepage', { users });
});

module.exports = router;
