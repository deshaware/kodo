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

  console.log("App",items,pages,currentPage)
  
  return (
      <Fragment>
      {error ? (
        <CustomError />
      ) : (
        <div className="container">
          <Search />
          <CardGrid items={items} isLoading={isLoading} />
          <Pagination pages={pages} currentPage={currentPage} />
          <Table items={items} isLoading={isLoading} />
        </div>
      )}
      </Fragment>
  );
}

export default App;
