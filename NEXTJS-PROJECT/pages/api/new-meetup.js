import { MongoClient } from "mongodb"
async function Handler(req, res) {
    if (req.method === "POST") {
        const data = req.body
        const { title, description, image, address } = data
        const client = await MongoClient.connect("mongodb+srv://kiran:12345@cluster0.1sbux.mongodb.net/meetups?retryWrites=true&w=majority")
        console.log("Client", client);
        const db = client.db();
        console.log("DB", db);
        const meetupCollection = db.collections("meetups")
        console.log("MeetupCollection", meetupCollection);
        const result = await meetupCollection.insertOne(data)
        console.log("result", result);

        client.close();

        res.status(201).json({ message: "meetup inserted!" })
    }


}
export default Handler