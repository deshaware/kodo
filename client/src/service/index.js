
export const generateQuery = (search, sortBy, offSet) => {
    search = (search) ? `&search=${search}` : '';
    let query = `http://localhost:5000/api/v1/data/getData?limit=8&skip=${offSet}&sortBy=${sortBy}` + search;
    return query;
}
