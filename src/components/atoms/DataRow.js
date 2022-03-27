// Presentation for a row of data

import React from 'react';

const DataRow = (props) => {
    const {data1, data2, data3, data4, data5} = props;

    return <div className='flexRow'>
    <div className='flex1'>
        {data1}
    </div>
    <div className='flex1'>
        {data2}
    </div>
    <div className='flex1'>
        {data3}
    </div>
    <div className='flex1'>
        {data4}
    </div>
    <div className='flex1'>
        {data5}
    </div>
</div>
}

export default DataRow;