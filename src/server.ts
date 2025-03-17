import "express-async-errors";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import cors from "cors";
/* import type type { ICustomer } from "./interfaces/customer";
import { createCostumerAsaas, createPaymentAsaas, getPaymentStatusAsaas, getQRCodePixAsaas } from "./provider/payment";
import type type { IPayment } from "./interfaces/payment"; */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCBOQgYIXN-sZ9i3uPA4u3GUO9dUHOIhOc",
	authDomain: "purchase-9bf97.firebaseapp.com",
	projectId: "purchase-9bf97",
	storageBucket: "purchase-9bf97.firebasestorage.app",
	messagingSenderId: "640677259576",
	appId: "1:640677259576:web:a44f47c04de1d95bd839cd",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

const app = express();

app.use(express.json());

app.use(cors());

app.post(
	"/apple",
	express.json({ type: "application/json" }),
	async (request, response) => {
		try {
			const docRef = await addDoc(collection(db, "apple"), request.body);
			console.log("Document written with ID: ", docRef.id);
			return response.json({ id: docRef.id });
		} catch (e) {
			console.error("Error adding document: ", e);
			return response.json({ id: null });
		}
	},
);

/* app.use("/images", express.static("uploads"));


app.post('/payments', express.json({type: 'application/json'}), async (request, response) => {
	const {paymentInfo, customerInfo} = request.body as {paymentInfo: IPayment, customerInfo: ICustomer}
	const date = new Date().toISOString().split('T')
	try {
		const customer = await createCostumerAsaas(customerInfo)
		const payment = await createPaymentAsaas({
			customer: customer.id,
			dueDate: date[0],
			billingType:'PIX',
			value: 20.00
		})
		const qrCodePix = await getQRCodePixAsaas(payment.id)
		response.json({paymentId: payment.id,...qrCodePix});
	} catch (error) {
		console.log(error)
	}
	});

	app.get('/payments/:paymentId/status', express.json({type: 'application/json'}), async (request, response) => {
		const {paymentId} = request.params as {paymentId: string}
		console.log(paymentId)
				try {
					const paymentStatus = await getPaymentStatusAsaas(paymentId)
					console.log(paymentId)
					response.json(paymentStatus)
				} catch (error) {
					console.log(error)
				}
			
		});

		app.get('/pdf',async (request, response)=>{
			const encodedPDF = 'Teste'
			response.writeHead(200, {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="filename.pdf"'
			  })
			const download = Buffer.from(encodedPDF, 'base64');
			response.end(download)
		}) */

app.use(
	(error: Error, request: Request, response: Response, next: NextFunction) => {
		return response.status(400).json({
			status: "Error",
			message: error.message,
		});
	},
);

app.listen(21168, () => console.log("Server is running on port 21168"));
