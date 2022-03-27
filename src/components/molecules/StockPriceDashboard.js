// Apps main component

import React, {useEffect, useState} from 'react';

import StockPricesLogs from './StockPricesLogs';
import Summary from '../molecules/Summary';
import DashboardItemContainer from './DashboardItemContainer';

import DataFetcher from '../../core/DataFetcher';

import {
    LOG_REFRESH_LENGTH_IN_MS,
    BTN_LABEL_PAUSE,
    BTN_LABEL_RESUME,
    DATA_API_URL,
    LOG_LABEL,
    SUMMARY_LABEL,
} from '../../utils/constants';

const StockPriceDashboard = () => {
    const [logPaused, setLogPaused] = useState(false);
    const [intervalHandler, setIntervalHandler] = useState();
    const [priceMatrix, setPriceMatrix] = useState({});
    const [freshData, setFreshData] = useState([]);
    const [productsByCode, setProductsByCode] = useState([]);
    const [APICallSuccess, setAPICallSuccess] = useState(false);
    const [initialEntry, setInitialEntry] = useState([]);

    console.dir(priceMatrix)
    
    const pauseButtonLabel = logPaused ? BTN_LABEL_RESUME : BTN_LABEL_PAUSE

    // When app mounts, perform a task every 2s.
    useEffect(() => {
        if(!logPaused){
            setIntervalHandler(setInterval(async () => {
                try{
                    const APIReturnObj = await DataFetcher.fetch(DATA_API_URL);
                    setFreshData(APIReturnObj.data);
                    if(!productsByCode.length){
                        const productCodes = APIReturnObj.data.map((item) => item.code);
                        setProductsByCode(productCodes);
                    }
                    setAPICallSuccess(true);
                } catch(error) {
                    setAPICallSuccess(false);
                }   
            }, LOG_REFRESH_LENGTH_IN_MS));
        }

        return () => {
            clearInterval(intervalHandler);
        }
    }, [logPaused]);

    useEffect(() => {
        if(freshData.length !== 0) {
            setPriceMatrix({
                ...priceMatrix,
                [`${Date.now()}`]: freshData,
            })
        }
        if(initialEntry.length === 0) {
            setInitialEntry(freshData);
        }
    }, [freshData]);

    // Handle Pause/Resume click event.
    const pauseButtonClickHandler = () => {
        setLogPaused(!logPaused);
        clearInterval(intervalHandler);
    }

    return <div className='flexRow'>
        <DashboardItemContainer
            label={LOG_LABEL}
            action={
                <button 
                    className='pauseBtn' 
                    onClick={pauseButtonClickHandler}
                >
                    {pauseButtonLabel}
                </button>
            }
            content={
                <StockPricesLogs 
                    showError={!APICallSuccess} 
                    priceMatrix={priceMatrix} 
                />
            }
        />
        <DashboardItemContainer
            label={SUMMARY_LABEL}
            content={
                <Summary 
                    productsByCode={productsByCode} 
                    priceMatrix={priceMatrix} 
                    initialEntry={initialEntry} 
                    freshData={freshData} 
                />
            }
        />
    </div>
}

export default StockPriceDashboard