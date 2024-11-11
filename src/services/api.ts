import axios from "axios";

export const apiAsaas = axios.create({
    baseURL:'https://sandbox.asaas.com/api/v3/',
    headers:{
        'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwOTQzODA6OiRhYWNoXzFhZWJjNjVkLTc1M2YtNDE1My05ZmY4LWQ2ZGY1NDllMTNkMA=='
    }
})

export const urlsAsaas = {
    customer:'customers',
    payment:'payments'
}