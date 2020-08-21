import React from 'react'
import { useDispatch} from 'react-redux'
import { clearRecords } from '../actions';

const Error = () => {
    const dispatch = useDispatch();

    // dispatch(clearRecords())
    const tryAgain = () => {
        dispatch(clearRecords())
    }

    return (
        <div className="container">
            Something went wrong! <a onClick={tryAgain()}>Try Again</a>
        </div>
    )
}

export default Error
