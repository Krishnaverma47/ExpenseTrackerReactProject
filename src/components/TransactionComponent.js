import React, { useState } from 'react'

const TransactionComponent = (props) => {
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("");
    const [typeRadio, setTypeRadio] = useState('expense');

    const dictionary = {
        'amount': amount,
        'desc': desc,
        'typeRadio': typeRadio
    }
    return (
        <div className='card p-2'>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="number" className="form-control" id="amount" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} required />
            </div>

            <div className='d-flex'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioexpense" id="expense" value="expense" onChange={(e) => setTypeRadio(e.target.value)} required />
                    <label className="form-check-label" htmlFor="expense">
                        Expense
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" name="radioexpense" id="income" value="income" onChange={(e) => setTypeRadio(e.target.value)} required />
                    <label className="form-check-label" htmlFor="income">
                        Income
                    </label>
                </div>
            </div>
            <button className='btn btn-sm btn-success mt-2' onClick={() => props.childData(dictionary)}>Add Transcation</button>
        </div>
    )
}

export default TransactionComponent;