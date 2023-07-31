const app = require('./app.js')
const PORT = process.env.PORT || 3010;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}..`);
    })
