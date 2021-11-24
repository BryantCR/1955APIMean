app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/quotes', (req, res) => {
    Quote.find()
        .then(quotes => res.json(quotes))
        .catch(err => res.json(err));
});
