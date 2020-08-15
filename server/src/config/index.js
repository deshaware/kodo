const env = require('dotenv');
const path = require('path')
let result = process.env.NODE_ENV !== 'production' ? env.config({ path: path.join( __dirname, '..', '..', '.env') }) : { error: null};
if(result.error) throw result.error;



