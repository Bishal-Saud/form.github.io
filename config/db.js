const mongooes = require('mongoose')

const connectToDB = async ()=>{
   try {
    // const MONGO_URI = 
   await mongooes.connect(process.env.MONGO_URI)

   console.log('DatabaseConnected');
        
    } catch (error) {
        console.log('Error: ',error);
        throw error
    }
  
}
module.exports = connectToDB;