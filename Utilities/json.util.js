const { Console } = require('console');
const fs = require('fs');

const readJSONFile=(path)=>{
    try{
        return JSON.parse(fs.readFileSync(path));
    }catch(exception)
    {
        console.log(exception)
    }
   
}

const WriteFile=(path)=> {
    const vistara={
        tagline: 'Vistara',
        Time: '21:05',
        Duration: '02h 45 min',
        Cost: 6790
     };
    try{
        
        fs.writeFile(path, JSON.stringify(vistara, null, 2), err=>{
            if(err){
                console.log("error");
            }else
            {
                console.log("File successfully written");
            }
         });
        }
        catch(exception)
        {
            console.log(exception)
        }
    }
  

  

WriteFile("E:/MMT/trip.json")

console.log(readJSONFile("E:/MMT/trip.json"));