module.exports = {
  isAdmin: function (req, res, next) {
    console.log(req.user)
    admin = false;
    if (req.user?.role == "admin") {
      admin = true;
    }
    next();
    return admin;
  },
};
