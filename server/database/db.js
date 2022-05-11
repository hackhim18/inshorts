import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@clone-inshorts-shard-00-00.4grzd.mongodb.net:27017,clone-inshorts-shard-00-01.4grzd.mongodb.net:27017,clone-inshorts-shard-00-02.4grzd.mongodb.net:27017/Project0?ssl=true&replicaSet=atlas-hvnl97-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection; 