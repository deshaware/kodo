
export const generateQuery = (search, sortBy, orderBy, offSet) => {
    // console.log("generateQuery", orderBy)
    search = (search) ? `&search=${search}` : '';
    let query = `http://localhost:5000/api/v1/data/getData?limit=8&skip=${offSet}&sortBy=${sortBy}&orderBy=${orderBy}` + search;
    return query;
}
