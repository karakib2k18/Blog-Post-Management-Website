exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next();
    }
    req.flash('error', 'Admin access only.');
    res.redirect('/');
  };
  