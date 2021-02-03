const mongoose = require('mongoose');
const uri="mongodb+srv://kavya_user01:root@cluster0.u84oj.mongodb.net/cluster0?authSource=admin&replicaSet=atlas-5256ad-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";
mongoose.connect(uri, { useNewUrlParser: true }).then(()=>{
    console.log("Connected");
}).catch(error => handleError(error));

var Schema = mongoose.Schema;
var JourneySchema = new Schema({
    From: String,
    To:String,
    date: {
        type:Date,
        default:Date.now

    }
  });
  const journey = mongoose.model('SomeModel', JourneySchema );
  const createDocument=async() =>{
      try{
        const journeyDetails= new journey({
            From:"Dehli",
            To:"bangalore"
           
        })
        const journeyDetailsOne= new journey({
            From:"Bangalore",
            To:"Dehli"
           
        })
        const result=await journey.insertMany([journeyDetails,journeyDetailsOne ]);
        console.log(result);

      }catch(err){
          console.log(err);
      }

      
  }
 
 createDocument();


  




