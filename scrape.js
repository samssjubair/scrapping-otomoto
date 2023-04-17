const express=require('express');
const axios=require('axios');
const cheerio=require('cheerio');
const app=express();
const port=process.env.PORT || 5001;
const url='https://www.google.com/search?q=google+search+engine&oq=google+search+engine&aqs=chrome..69i57j0l5.1001j0j7&sourceid=chrome&ie=UTF-8';

const fetchData=async ()=>{
    try {
        const result=await axios.get(url);
        let $=cheerio.load(result.data);
        console.log($);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
