app.get('/demo-user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id;
  sequelize.query(query);
});
