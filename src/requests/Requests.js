const APIURL = "https://api.nytimes.com/svc";
const axios = require("axios")

export const getArticles = section => 
axios.get(
    `${APIURL}/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_APIKEY}`
)