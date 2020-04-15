import React, { useCallback } from 'react';
import { useLocalStorage } from '@rehmat-falcon/use-local-storage';
import './index.css';
import ReactJson from 'react-json-view';

const Second = () => {
    const localStorageManager = useLocalStorage("obj_value", {});
    const handleChange = useCallback(e => {
        localStorageManager.update(e.updated_src);
    });
    return (
        <div className="row">
            <div className="col card" style={{ width: '50%' }}>
                <div className="card-header">
                    <h3 className="card-title">
                        Value
                    </h3>
                </div>
                <div className="card-body">
                    <ReactJson src={localStorageManager.state.value} theme="mocha" iconStyle="square" enableClipboard={true} onEdit={handleChange} onAdd={handleChange} onDelete={handleChange} />
                </div>
            </div>
            <div className="col card" style={{ width: '50%' }}>
                <div className="card-header">
                    <h3 className="card-title">
                        Value
                    </h3>
                </div>
                <div className="card-body">
                    <ReactJson src={localStorageManager.state.value} theme="mocha" iconStyle="square" enableClipboard={true} onEdit={handleChange} onAdd={handleChange} onDelete={handleChange} />
                </div>
            </div>
        </div>
    );
};
export default Second;