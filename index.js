const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rao123@',
    database: 'server'
})

app.post('/login',(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const q = 'INSERT INTO login(name, email, password) VALUES(?,?,?)'
    db.query(q,[name,email,password],(err, result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send('seccessfully updated')
            console.log(result)
        }
    })
})

app.post('/register',(req,res)=>{
    
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirm_password = req.body.confirm_password  

    const q= 'INSERT INTO register_user(username,email,password,confirm_password) VALUES (?,?,?,?)'

    db.query(q,[username,email,password,confirm_password],(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.status(404).send('Sorry, cant find that');
            res.send('successfully inserted !! happy haking')
        }
    })

})




const queryselection=(q)=>{
    app.get('/data', (req, res) => {

        db.query(q, (err, result) => {
            console.log(result)
            if (err) {
                console.log(err)
            } else {
               res.send(result)
            }
        })
    })
}

queryselection('select * from login')

app.listen('5000', (err) => {
    if (err) throw err;
    console.log('listening on port 5000')
})  