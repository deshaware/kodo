
export const generateQuery = (search, sortBy, orderBy, offSet) => {
    // console.log("generateQuery", orderBy)
    search = (search) ? `&search=${search}` : '';
    let query = `/api/api/v1/data/getData?limit=6&skip=${offSet}&sortBy=${sortBy}&orderBy=${orderBy}` + search;
    return query;
}
