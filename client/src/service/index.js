export const setPages = (items) => {
    return items;
}


export const generateQuery = (search, sortBy, offSet) => {
    console.log(search, sortBy)
    console.log("Search term is ", search)
    search = (search) ? `&search=${search}` : '';
    let query = `/api/v1/data/getData?limit=8&skip=${offSet}&sortBy=${sortBy}` + search;
    // if(search)
    //     console.log(search)
    // query = search ? query + `?s earch=${search}` : query
    console.log("QUERY", query)
    return query;
}