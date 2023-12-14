const express = require ('express') ;
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());


app.get ("/about", ( req, res ) =>{
    // console.log('reached to endpoint')

    //body
    const {name}=req.body;
    res.send("hello" + name);

    res.send("we are now in about route")
} )

app.post("/about" , ( req, res ) => {
    res.send ( " we are /about  POST " )
})

// we have made only one route but used different methods

app.patch ( "/about" , (req, res) => {
    
    res.status ( 200 ).send() // just showed that arrived 
} )

app.delete ( " /about ", (req, res ) => {
    res.json( {
        id: "1",
        message : " the product has been deleted "
    } )
} )

app.listen(PORT , ()=>console.log(`running api on ${PORT}`))