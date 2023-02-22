module.exports = {
  isAdmin: function (req, res, next) {
    admin = false;
    if (req.user?.role == "admin") {
      admin = true;
    }
    next();
    return admin;
  },
};
