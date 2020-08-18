const regexForQuotes = /"(.*?)"/gi;


const termGenerator = (search) => {
    console.log("term generator", search)
    console.log(search.replace(/"/g, ''))
    if (regexForQuotes.test(search))
    {
        console.log("Quotes exists")
        return `Select * from data where name ilike '%${search.replace(/"/g, '')}%' or description ilike '%${search.replace(/"/g, '')}%'`;
    }
        
    if (search.split(' ')[1]){
        console.log("Spaces exists")
        return `Select * from data where name ilike '%${search.split(" ").join("%")}%' or description ilike '%${search.split(" ").join("%")}%'`;
    }
    return `Select * from data where name ilike '%${search}%' or description ilike '%${search}%'`
}

const sortData = ( sortBy, orderBy ) => {
   return  ( sortBy && sortBy.toLowerCase() === 'name') ? (` order by name ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`) :
            ( sortBy && sortBy.toLowerCase() === 'datelastedited' ) ? (` order by datelastedited ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`) :
            (` order by name ${orderBy && orderBy === 'desc' ? 'desc' : 'asc'}`);
}

module.exports = { sortData, termGenerator };