import expres from 'express';
import cors from 'cors';

const app = expres();

app.use(cors());
app.use(expres.json());

app.listen(5000, () => {
  console.log('Server is running on port 3000');
})


app.get('/', (req, res) => {
  res.send('Hello World!');
})
