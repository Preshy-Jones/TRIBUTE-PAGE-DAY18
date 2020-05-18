const express = require('express');
var app = express();
const port = process.env.PORT || 8001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
    res.render('tribute')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
