 import News from "../model/news-schema.js";


export const getNews = async (request, response) => {
    try {
        let data = await News.find({});
        // console.log(data.count());
        response.status(200).json(data);
    } catch (error) {
       // console.log(error);
        response.status(500).json({message: data.message});
    }
}   