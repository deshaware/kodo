
const sortData = ( data, sortBy, orderBy ) => {
    console.log("orderBy")
    if(sortBy === 'title')
        (orderBy && orderBy == "desc") ? data.sort( ( a, b) => b[sortBy] - a[sortBy] ) : data.sort( ( a, b) => (a[sortBy] > b[sortBy]) ? 1 : 0 )
    if(sortBy === 'dateLastEdited')
        (orderBy && orderBy == "desc") ? data.sort( ( a, b) => b[sortBy] - a[sortBy] ) : data.sort( ( a, b) => a[sortBy] - b[sortBy] );
    return data;
}

module.exports = { sortData };