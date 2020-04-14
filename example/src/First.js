import { useLocalStorage } from '@rehmat-falcon/use-local-storage';
import React from 'react';

const First = () => {
    let localStorageManager = {};
    localStorageManager = useLocalStorage("name", "Initial Name");
    const firstInputRef = React.createRef();
    const updateFirst = () => {
        localStorageManager.update(firstInputRef.current.value);
    };
    const removeStorage = () => {
        localStorageManager.remove();
        firstInputRef.current.value = "";
    };
    const { value } = localStorageManager.state;
    return (
        <div className="row">
            <div className="col card">
                <div className="card-header">
                    <h3 className="title">
                        Update Value
          </h3>
                </div>
                <div className="card-body">
                    <input type="text" className="input full" ref={firstInputRef} defaultValue={localStorageManager.state.value}
                        placeholder="Value to save in localstorage"
                    />
                    <button className="btn btn-primary" onClick={updateFirst}>
                        Update
          </button>
                    <button className="btn btn-danger" onClick={removeStorage}>
                        Delete
          </button>
                </div>
            </div>
            <div className="col card">
                <div className="card-header">
                    <h3 className="title">
                        Local storage values
          </h3>
                </div>
                <div className="card-body">
                    Key : {localStorageManager.key} <br />
          Exists : {localStorageManager.state.exists && <span>Yes</span>}
                    {!localStorageManager.state.exists && <span>No</span>}
                    <br />
          Value : {localStorageManager.state.value} <br />
          Initial Value : {localStorageManager.nonReactiveState.value}
                </div>
            </div>
        </div>
    );
};

export default First;