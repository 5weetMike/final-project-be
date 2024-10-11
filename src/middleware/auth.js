const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'GoodBye' });
  }
};