import React from 'react';
import {useLocalStorage} from '@rehmat-falcon/use-local-storage';
import './index.css';

const Second = () => {
    const localStorageManager = useLocalStorage("obj_value", {
        a : 123,
        b : 456,
        ef : "Core"
    },true);
    console.log(localStorageManager.state);
    return (
        <div className="row">
            <div className="col card">
                <div className="card-header">
                    <h3 className="card-title">
                        Value
                    </h3>
                </div>
                <div className="card-body">
                    View in dev tools
                </div>
            </div>
        </div>        
    );
};
export default Second;