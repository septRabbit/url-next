// import axios from 'axios'

// export async function postURL() {
//     const response = await axios("https://miu.services/backend/api/short", {
//                 headers: { "content-type": "application/json" },
//                 method: "POST",
//                 data: formData,
//             })
            
//             if (response.status > 400)
//             throw new Error(`networking error ${response.statusText}`);

//             const data = response.data.shortUrl;

//             if (typeof data === "string") {
//                 router.push({pathname: "/result", query: data });
// }