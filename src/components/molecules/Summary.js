// Summary component for stocks

import React from 'react';

import ItemSummary from '../atoms/ItemSummary';
import DataRow from '../atoms/DataRow';

const Summary = (props) => {
    const {priceMatrix, productsByCode, freshData, initialEntry} = props;

    return <div className='summaryContainer'>
        <DataRow
            data1={<b>Stock</b>}
            data2={<b>Starting</b>}
            data3={<b>Lowest</b>}
            data4={<b>Highest</b>}
            data5={<b>Current</b>}
        />
        {
            productsByCode.map((code) => 
            <ItemSummary 
                key={code}
                code={code} 
                priceMatrix={priceMatrix} 
                freshData={freshData} 
                initialEntry={initialEntry} 
            /> )
        }
    </div>
}

export default Summary;