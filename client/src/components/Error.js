import React, { Fragment } from 'react'
import { useDispatch} from 'react-redux'
import { refresh, dataLoading } from '../actions';

const Error = () => {
    const dispatch = useDispatch();
    console.log("In ERror Js")
    return (
        <Fragment className="container">
            <div className="error">
                Something went wrong! <a onClick={ () => {dispatch(dataLoading());dispatch(refresh());}} style={{textDecoration:'underline', color:'#3fb573'}}>Try Again</a>
            </div>
        </Fragment>
        
    )
}

export default Error
