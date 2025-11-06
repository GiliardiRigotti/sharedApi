import "express-async-errors";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import cors from "cors";
import { ICustomer } from "./interfaces/customer";
import { createCostumerAsaas, createPaymentAsaas, getPaymentStatusAsaas, getQRCodePixAsaas } from "./provider/payment";
import { IPayment } from "./interfaces/payment";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/images", express.static("uploads"));


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
})

app.get('/',async (request, response)=>{
	return response.json({ message:"Hello World", timestamp: new Date().toISOString() });
})

app.use(
	(error: Error, request: Request, response: Response, next: NextFunction) => {
		return response.status(400).json({
			status: "Error",
			message: error.message,
		});
	},
);

app.listen(3000, () => console.log("Server is running on port 3000"));
