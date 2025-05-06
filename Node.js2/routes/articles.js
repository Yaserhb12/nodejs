const express = require('express');
const router = express.Router();
const controller = require('../controllers/articlesController');

router.get('/', controller.getAllArticles);
router.post('/', controller.addArticle);
router.put('/:id', controller.updateArticle);
router.delete('/:id', controller.deleteArticle);

module.exports = router;
