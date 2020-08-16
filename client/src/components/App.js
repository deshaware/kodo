import React from 'react';
import '../App.css';
import { useSelector, shallowEqual } from 'react-redux';

//components
import Search from './Search'
import CardGrid from './card/CardGrid'
import Table from './table/Table';

function App() {
  const {items, isLoading} = useSelector(state => ({
    items: state.data.records,
    isLoading: state.data.loading
    }), shallowEqual)
  
  return (
      <div className="container">
        <Search />
        <CardGrid items={items} isLoading={isLoading}/>
        <Table items={items} isLoading={isLoading} />
      </div>
  );
}

export default App;
