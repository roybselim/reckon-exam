// Stock Price Log component

import React from 'react';

import {UPDATES_FOR_LABEL} from '../../utils/constants';

const StockPricesLogs = (props) => {
    const {priceMatrix} = props;

    const createItemLogs = () => {
        let logItems = [];
        for(let entry in priceMatrix) {
            logItems.push(<div key={entry} className="padBtm25">
                <div>{`${UPDATES_FOR_LABEL} ${new Date(parseInt(entry,10)).toLocaleString()}`}</div>
                <div>
                    {
                        priceMatrix[entry].map((item, index) => {
                        return <div key={index}>
                            {`${item.code}: $${item.price}`}
                        </div>})
                    }
                </div>
            </div>);
        }
        return logItems.reverse();
    }

    return <div className="stockPriceLogsContainer">
        {createItemLogs()}
    </div>
}

export default StockPricesLogs;
