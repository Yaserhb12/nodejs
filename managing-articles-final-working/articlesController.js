
const db = require('./db');

exports.getAllArticles = (req, res) => {
    db.query('SELECT * FROM articles', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.createArticle = (req, res) => {
    const { title, content } = req.body;
    db.query('INSERT INTO articles (title, content) VALUES (?, ?)', [title, content], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ id: result.insertId, title, content });
    });
};

exports.updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    db.query('UPDATE articles SET title = ?, content = ? WHERE id = ?', [title, content, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'מאמר עודכן בהצלחה' });
    });
};

exports.deleteArticle = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM articles WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'מאמר נמחק בהצלחה' });
    });
};

exports.searchArticles = (req, res) => {
    const keyword = req.query.q;
    if (!keyword) return res.status(400).json({ error: "יש להזין מילת חיפוש" });

    const like = `%${keyword}%`;
    db.query('SELECT * FROM articles WHERE title LIKE ? OR content LIKE ?', [like, like], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};
