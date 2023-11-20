import axios from "axios";
import express from "express";

const myapikey = '01eb75667ab868a7d8cb43820c72cdc7';
const port=3000;
const app = express();

app.use(express.static('public'));

app.get('/',async (req,res)=>{
    const response = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`,{
        params:{
            api_key : myapikey
        }
    });
    let dataObjects = Object.values(response.data["Data"]);
    
    // var result = [];
    // for(var i=0;i<dataObjects.length;++i)
    // {
    //     result.push(dataObjects[i]["symbol"]);
    // }
    // res.send(result);

    res.render('index.ejs',{
        coinList : dataObjects
    })
    console.log(dataObjects[3])
    // res.send(response.data["Data"]);    
    
})

app.listen(port)
console.log(`Listening at port : ${port}`);