export interface IPayment{
    customer: string
    billingType: string
    value: number
    dueDate: string
}

export interface IQrCodePix {
  success: boolean
  encodedImage: string
  payload: string
  expirationDate: string
}

export interface IPaymentStatus{
  status: "PENDING" | "RECEIVED" | "CONFIRMED" | "OVERDUE" | "REFUNDED" | "RECEIVED_IN_CASH" | "REFUND_REQUESTED" | "REFUND_IN_PROGRESS" | "CHARGEBACK_REQUESTED" | "CHARGEBACK_DISPUTE" | "AWAITING_CHARGEBACK_REVERSAL" | "DUNNING_REQUESTED" | "DUNNING_RECEIVED" | "AWAITING_RISK_ANALYSIS"
}

export interface IResponsePayment {
    object: string
    id: string
    dateCreated: string
    customer: string
    paymentLink: any
    value: number
    netValue: number
    originalValue: any
    interestValue: any
    description: any
    billingType: string
    pixTransaction: any
    status: string
    dueDate: string
    originalDueDate: string
    paymentDate: any
    clientPaymentDate: any
    installmentNumber: any
    invoiceUrl: string
    invoiceNumber: string
    externalReference: any
    deleted: boolean
    anticipated: boolean
    anticipable: boolean
    creditDate: any
    estimatedCreditDate: any
    transactionReceiptUrl: any
    nossoNumero: any
    bankSlipUrl: any
    lastInvoiceViewedDate: any
    lastBankSlipViewedDate: any
    discount: Discount
    fine: Fine
    interest: Interest
    postalService: boolean
    custody: any
    refunds: any
  }
  
  export interface Discount {
    value: number
    limitDate: any
    dueDateLimitDays: number
    type: string
  }
  
  export interface Fine {
    value: number
    type: string
  }
  
  export interface Interest {
    value: number
    type: string
  }