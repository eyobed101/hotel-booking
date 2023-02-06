import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'; 
import usersRoute from './routes/users.js'; 
import roomsRoute from './routes/rooms.js'; 
import hotelsRoute from './routes/hotels.js'; 
import cookieParser from 'cookie-parser';

dotenv.config();
mongoose.set("strictQuery", false);
const app = express();

const connect = async () =>{

	try {
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB");
		// console.log(process.env.MONGO)
	}
	catch (error){
		handleError(error);
	}
};

mongoose.connection.on("disconnected" , () =>{
	console.log("mongoDB Disconnected!");
});
mongoose.connection.on("connected" , () =>{
	console.log("mongoDB connected!");
});

// app.get("/users", (req,res) =>{
// 	res.send("Hello first Req!");
// });
// app.get("/", (req,res) =>{
// 	res.send("Home");
// });

// middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.listen(8800, ()=> {
	connect();
	console.log("I'm connected to the backend Eyobed!");
});