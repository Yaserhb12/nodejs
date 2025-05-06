const db = require('../db');

exports.getAllArticles = (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM articles';
  if (category) {
    query += ' WHERE category = ?';
    db.query(query, [category], (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  } else {
    db.query(query, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  }
};

exports.addArticle = (req, res) => {
  const { title, content, category } = req.body;
  db.query('INSERT INTO articles (title, content, category) VALUES (?, ?, ?)',
    [title, content, category],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Article added', id: result.insertId });
    }
  );
};

exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content, category } = req.body;
  db.query('UPDATE articles SET title=?, content=?, category=? WHERE id=?',
    [title, content, category, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Article updated' });
    }
  );
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM articles WHERE id=?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Article deleted' });
  });
};
