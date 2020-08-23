import React, { Fragment } from 'react';
import '../App.css';
import { useSelector, shallowEqual } from 'react-redux';

//components
import Search from './Search'
import CardGrid from './card/CardGrid'
import Table from './table/Table';
import Pagination from './Pagination/Pages'
import CustomError from './Error'

function App() {
  const {items, isLoading, pages, currentPage, error} = useSelector(state => ({
            items: state.data.records,
            isLoading: state.data.loading,
            currentPage: state.data.currentPage,
            pages: state.data.pages,
            error: state.data.error
          }),
          shallowEqual)


  
  return (
      <Fragment>
        {error ? (
          <CustomError className="container" />
        ) : (
          <div className="container">
            <Search />
            {items.length > 0 ? (
              <Fragment>
                <CardGrid items={items} isLoading={isLoading} />
                <Pagination pages={pages} currentPage={currentPage} />
                <Table items={items} isLoading={isLoading} />
              </Fragment>
            ): <div className="error" style={{minHeight:'20vh'}}>No Result found for query</div>}
          </div>
        )}
      </Fragment>
  );
}

export default App;
