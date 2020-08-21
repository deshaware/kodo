import React, { Fragment, useState } from 'react'

const PageItems = ({ pages }) => {

    const [ pageWindow, setPageWindow] = useState([0,6])

    const movePageWindow = (e, direction) => {
        if(direction === 'left'){
            if(Number(e) === 0 )
                return;
            setPageWindow([--pageWindow[0], --pageWindow[1]])
        }
        if(direction === 'right'){
            if(Number(e) === pages.length || pageWindow[1] > pages.length - 1)
                return;
            setPageWindow([++pageWindow[0], ++pageWindow[1]])     
        }      
    }

    const displayWindow = () => {
        let arr = []
        for(let i = pageWindow[0]; i < pageWindow[1]; i++ ) {
            arr.push(pages[i])
        }
        return arr;
    }


    return (
        <Fragment>
            <a onClick= {e => movePageWindow([pageWindow[0]], 'left')}>&laquo;</a>
            {displayWindow()}
            <a onClick={ e => movePageWindow(pageWindow[pageWindow.length - 1], 'right')}>&raquo;</a>
        </Fragment>
    )
}

export default PageItems