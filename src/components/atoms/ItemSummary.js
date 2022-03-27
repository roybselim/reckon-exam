// Item summary component

import React from 'react';

import DataRow from './DataRow';

import {getStockEntries} from '../../helpers/DataHelper'

const ItemSummary = (props) => {
    const {code, priceMatrix, initialEntry, freshData} = props;

    const stockEntries = getStockEntries(priceMatrix, code).sort((a, b) => a - b);
    const lowestPrice = stockEntries[0];
    const highestPrice = stockEntries[stockEntries.length - 1];
    const startingPrice = initialEntry.length && initialEntry.find((item) => item.code === code).price;
    const currentPrice = freshData.length && freshData.find((item) => item.code === code).price;

    return <DataRow
        data1={code}
        data2={startingPrice}
        data3={lowestPrice}
        data4={highestPrice}
        data5={currentPrice}
    />
}

export default ItemSummary;
