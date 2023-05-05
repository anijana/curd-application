import mongoose from "mongoose"


const Connection = async(username,password) => {

    const URL =`mongodb+srv://${username}:${password}@crud-app.bfrcf3t.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log('database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;