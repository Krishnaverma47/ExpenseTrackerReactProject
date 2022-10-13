import React, { useState } from 'react'
import TransactionComponent from './TransactionComponent';

const OverViewComponent = () => {
    let incomeValue = 0;
    const [spend, setSpend] = useState(incomeValue);
    const [adTrxVisible, setAdTrxVisible] = useState(false);
    const [allValue, setAllValue] = useState([]);

    const ButtonHandler = () => {
        setAdTrxVisible(!adTrxVisible);
    }

    const TransicationView = () => {
        if (adTrxVisible === true) {
            return (
                <TransactionComponent childData={childProps}></TransactionComponent>
            );
        }
    }

    const childProps = (result) => {
        if (result.typeRadio === 'expense') {
            if (parseInt(result.amount) > spend) {
                alert('Income is to low');
                setSpend(spend);
            }
            else {
                allValue.push(result);
                setAllValue(allValue);
                setSpend(spend - parseInt(result.amount));
            }
        }
        else {
            setSpend(spend + parseInt(result.amount));
            allValue.push(result);
            setAllValue(allValue);
        }
        setAdTrxVisible(false);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='fw-semibold fs-5 text-success me-3'>Balance : <span>{spend}$</span></div>
                    <button className='btn btn-sm btn-secondary' onClick={ButtonHandler}>{adTrxVisible ? 'CENCEL' : 'ADD'}</button>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    {
                        TransicationView()
                    }
                </div>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <div className='fs-6 text-danger fw-semibold'>Balance : <span>{spend}$</span></div>
                    <div className='fs-6 text-success ms-4 fw-semibold'>Income : <span>{spend} $</span></div>
                </div>
                {
                    allValue.map((item, index) => {
                        return (
                            <div className='mb-2 d-flex align-items-center flex-column' key={index} >
                                <div className='card1 text-center text-secondary'>
                                    <span className='fs-6 fw-semibold'>{item.amount}$ for </span>
                                    <span className='fs-6 fw-semibold'>{item.desc} </span>
                                    <span className='fs-6 fw-semibold'>{item.typeRadio}</span>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default OverViewComponent;