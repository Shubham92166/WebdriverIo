
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
    
    try{
        
        fs.writeFile(path, JSON.stringify(obj, null, 2), err=>{
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
    const addDataToJSON = (path, obj) =>{
        let jsonObj= readJSONFile(path)
        jsonObj = {...jsonObj, ...obj}
        WriteJSONFile(path, jsonObj);
    }
module.exports={ addDataToJSON};


