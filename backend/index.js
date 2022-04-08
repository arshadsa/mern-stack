import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("connection is successfull..."))
.catch((err) => {
  console.log(err);
})

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
  res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, ()=>
  console.log(`Your soccer server is running on port ${PORT}`)
);