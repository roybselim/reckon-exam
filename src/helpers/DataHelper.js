// Helpers for various data parsing.

export const getStockEntries = (stockPriceMatrix, code) => {
    let stockPricesPerCode = [];
    for(let entry in stockPriceMatrix){
        const stockByCode = stockPriceMatrix[entry].find((item) => item.code === code);
        stockByCode && stockPricesPerCode.push(stockByCode.price);
    }
    return stockPricesPerCode;
}