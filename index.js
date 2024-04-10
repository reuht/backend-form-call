let { app } = require("./app.js"); 

let port = 5876; // configuration in json. 

app.get('/', (req, res)=>{
    res.render('index'); 
})

app.listen(port, () => {
    console.log(`listen in port http://localhost:${port}`); 
}); 