
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const topicRouter = require('./routes/topic.Router');
const errorRouter = require('./routes/error.Router');
const siteRouter = require('./routes/site.Router');
const mainRouter = require('./routes/main.Router');
const wordRouter = require('./routes/word.router')
const minusRouter = require('./routes/minusRating.Router')
const addRouter = require('./routes/addRating.Router')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/topic', topicRouter);
app.use('/error', errorRouter);
app.use('/site', siteRouter);
app.use('/main', mainRouter);
app.use('/word', wordRouter);
app.use('/minusRating', minusRouter);
app.use('/addRating', addRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
