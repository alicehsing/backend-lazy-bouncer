const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  try {
    // get the value from the cookie (jwt)
    const session  = req.cookies.ChipsAhoy;
    
    // verify the jwt
    const payload = jwt.verify(session, process.env.JWT_SECRET);
 
    req.user = payload;
    console.log('req.user------', req.user);
    next();
  } catch (error) {
    error.message = 'You must be signed in to continue';
    error.status = 401;
    next(error);
  }

};
