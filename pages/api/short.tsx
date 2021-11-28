import axios from 'axios'

async function handler (req, res) {
    const sendData = req.body

    try{
        const response = await axios("https://miu.services/backend/api/short", {
            headers: { "content-type": "application/json" },
            method: "POST",
            data: sendData,
          });
    
          if (response.status > 400)
            throw new Error(`networking error ${response.statusText}`);
    
          const data = response.data.shortUrl;
          res.status(201).json({message: 'Success!'})
    } catch(error) {
        res.status(201).json({message: error})
    }
   
}

export default handler