const express=require('express');
const app=express();
const cors=require('cors');//for Cross-origin resource sharing
const mongoose=require('mongoose');//connect to db via mongoose
const Book=require('./models/book.js');//importing the data model
const port=8000;

const dbUrl='mongodb://127.0.0.1:27017/books';
mongoose.connect(dbUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log('Database connected');  
}).catch( (err)=>{
    console.log('connection error:');
    console.log(err);
    process.exit(1);
    //exit status code 1 - Uncaught Fatal Exception
});

app.use(express.json());//to parse json requests
app.use(express.urlencoded({extended:true}));//to parse urlencoded requests
app.use(cors());

//ROUTES

//home page
app.get('/', (req,res)=>{
    res.send('hello from books app');
})



//add a new book to DB
app.post('/add', (req,res)=>{
    // Validate request
    if (!req.body.title|| !req.body.author || !req.body.isbn) {
        return res.status(400).send({ message: "Error: Missing Content!" });
    }

    // Create a book
    const book = new Book(req.body);
    // console.log(book);

    // Save book in the database
    book.save()
        .then(data => {
            return res.status(200).send('book added successfully');
        })
        .catch(err => {
            return res.status(500).send({message: err.message || "Some went wrong while saving the book to the DB."});
        });

})


app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})