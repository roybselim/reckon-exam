// Container for a Dashboard item.

import React from 'react';

const DashboardItemContainer = (props) => {
    const {label, action, content} = props;

    return (<div className='dashboardItemContainer'>
        <div className='dashboardItemHeaderContainer'>
            <div>
                <h2>
                    {label}
                </h2>
            </div>
            {action}
        </div>
        {content}
    </div>);
}

export default DashboardItemContainer;