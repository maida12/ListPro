const UserSchema = require('../schemas/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()


router.post('/register', async (req, res) => {
  const {name, email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ msg: 'Password and email are required' })

  if (password.length < 8) {
    return res
      .status(400)
      .json({ msg: 'Password should be at least 8 characters long' })
  }

  const user = await UserSchema.findOne({ email }) // finding user in db
  if (user) return res.status(400).json({ msg: 'User already exists' })

  const newUser = new UserSchema({ name,email, password })
  // hasing the password
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err)
      return res.status(400).json({ msg: 'error while saving the password' })

    newUser.password = hash
    const savedUserRes = await newUser.save()

    if (savedUserRes)
      return res.status(200).json({ msg: 'user is successfully saved' })
  })
})



router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ msg: 'Something missing' })
  }

  const user = await UserSchema.findOne({ email: email }) // finding user in db
  if (!user) {
    return res.status(400).json({ msg: 'User not found' })
  }

  const matchPassword = await bcrypt.compare(password, user.password)
  if (matchPassword) {
	// ------- NEW CODE HERE
 
    const userSession = { id :user._id,email: user.email, name: user.name} // creating user session to keep user loggedin also on refresh
    req.session.user = userSession // attach user session to session object from express-session
    
    return res
      .status(200)
      .json({ msg: 'You have logged in successfully', userSession }) // attach user session id to the response. It will be transfer in the cookies
  } else {
    return res.status(400).json({ msg: 'Invalid credential' })
  }
})



router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Error logging out' });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    return res.status(200).json({ msg: 'You have been logged out' });
    //res.redirect('/login');
  });
  
});

router.get('/isAuth', async (req, res) => {
  
  if (req.session.user) {
    return res.json(req.session.user)

  } else {
    return res.status(401).json('unauthorize')
  }
})
 

module.exports = router


