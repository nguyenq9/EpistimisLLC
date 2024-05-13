import mongoose from "mongoose";

const URI = process.env.DATABASE_URL

const connectMongoDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Epistimis' // Specify your desired database name
    })

    // const db = mongoose.connection;
    
    // // // Rename the collection from 'usLaws' to 'us'
    // await db.collection('usLaws').rename('uslaws');

    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log("Error in the connection process!", error);
  }
}

export default connectMongoDB;