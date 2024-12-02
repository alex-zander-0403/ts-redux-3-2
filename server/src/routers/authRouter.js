const authRouter = require('express').Router();

const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookie.config');

// регистрация
authRouter.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  // if (!email || !username || !password) {
  //   return res.status(400).json({ error: 'Missing required fields' });
  // }

  if (email && username && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { username, password: await bcrypt.hash(password, 10) },
      });

      if (!created) {
        return res.status(403).json({ error: 'User already exists' });
      }
      const plainUser = user.get();
      delete plainUser.password; // не высылаем на фронт!

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .status(200)
        .json({ accessToken, user: plainUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }
  return res.sendStatus(500);
});

// login
authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // if (!email || !password) {
  //   return res.status(400).json({ error: 'Missing required fields' });
  // }
  if (email && password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ error: 'Не верный логин или пароль' });
      }

      // достаем пароль
      // const isValidPassword = await bcrypt.compare(password, user.password);
      // проверяем пароль
      // if (!isValidPassword) {
      //   return res.status(401).json({ error: 'Не верный логин или пароль' });
      // }

      // достаем и проверяем сразу
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Не верный пароль' });
      }

      const plainUser = user.get();
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .status(200)
        .json({ user: plainUser, accessToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// logout
authRouter.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRouter;
