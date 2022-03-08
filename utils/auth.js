const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login'); //TODO we might want to change this from /login
  } else {
    next();
  }
};

module.exports = withAuth;