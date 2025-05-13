const express = require('express');
const router = express.Router();
const controller = require('../articlesController');

// 📄 הצגת כל המאמרים
router.get('/', controller.getAllArticles);

// 🔍 חיפוש מאמרים לפי מילת מפתח
router.get('/search', controller.searchArticles);

// ➕ הוספת מאמר חדש
router.post('/', controller.createArticle);

// ✏️ עריכת מאמר לפי ID
router.put('/:id', controller.updateArticle);

// ❌ מחיקת מאמר לפי ID
router.delete('/:id', controller.deleteArticle);

module.exports = router;
