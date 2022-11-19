const app = require('./server');
const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Rest API listening on port ${PORT}`);
})