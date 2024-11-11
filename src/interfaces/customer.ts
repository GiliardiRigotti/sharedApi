export interface ICustomer {
    object: string
    id: string
    dateCreated: string
    name: string
    email: any
    company: any
    phone: any
    mobilePhone: any
    address: any
    addressNumber: any
    complement: any
    province: any
    postalCode: any
    cpfCnpj: string
    personType: string
    deleted: boolean
    additionalEmails: any
    externalReference: any
    notificationDisabled: boolean
    observations: any
    municipalInscription: any
    stateInscription: any
    canDelete: boolean
    cannotBeDeletedReason: any
    canEdit: boolean
    cannotEditReason: any
    city: any
    cityName: any
    state: any
    country: string
  }

  export interface ISearchCustomer {
    object: string
    hasMore: boolean
    totalCount: number
    limit: number
    offset: number
    data: ICustomer[]
  }