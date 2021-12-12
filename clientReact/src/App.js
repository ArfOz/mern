import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Cities, Detail} from "./components/index"
import {reducer, initialState} from './components/context/index'


const store =createStore(reducer, initialState);

const App = (props) => {
    return (
        <Provider store={store}>
        <div>
            <Cities />
            <Detail />
        </div>
        </Provider>
    )
}

export default App