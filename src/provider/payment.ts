
import { ICustomer, ISearchCustomer } from "../interfaces/customer";
import { IPayment, IPaymentStatus, IQrCodePix, IResponsePayment } from "../interfaces/payment";
import { apiAsaas, urlsAsaas } from "../services/api";

export async function createCostumerAsaas(customer: ICustomer){
    const {data} = await apiAsaas.get<ISearchCustomer>(`${urlsAsaas.customer}?cpfCnpj=${customer.cpfCnpj}`)
    console.log('Verifica se ja tem cadastro')
    if(data.totalCount < 1){
        const {data} = await apiAsaas.post<ICustomer>(urlsAsaas.customer, customer)
        console.log('Caso não tiver, sera criado um cadastro')
        return data
    }
    console.log('Sera usado o cadastro existente')
    return data.data[0]
    
}

export async function createPaymentAsaas(payment: IPayment){
    const {data} = await apiAsaas.post<IResponsePayment>(urlsAsaas.payment, payment)
    return data
}

export async function getQRCodePixAsaas(paymentId: string){
    const {data} = await apiAsaas.get<IQrCodePix>(`${urlsAsaas.payment}/${paymentId}/pixQrCode` )
    return data
}

export async function getPaymentStatusAsaas(paymentId: string){
    const {data} = await apiAsaas.get<IPaymentStatus>(`${urlsAsaas.payment}/${paymentId}/status` )
    return data
}