export interface CurrenciesApi {
    success: boolean,
    symbols: { [key: string]: string }
}

export interface CurrencyExchangeApi {
    date: string,
    historical: string,
    info: {
        rate: number,
        timestamp: number
    },
    query: {
        amount: number,
        from: string,
        to: string
    },
    result: number,
    success: boolean
}
