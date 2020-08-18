export const setPages = (items) => {
    return items;
}

export const generateQuery = (search, sortBy) => {
    console.log(search, sortBy)
    console.log("Search term is ", search)
    search = (search) ? `&search=${search}` : '';
    let query = `/api/v1/data/getData?sortBy=${sortBy}` + search;
    // if(search)
    //     console.log(search)
    // query = search ? query + `?s earch=${search}` : query
    console.log("QUERY", query)
    return query;
}