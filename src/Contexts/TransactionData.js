import { createContext } from 'react'


let finalArray= {};
function RequireContext(data, check)
{
    if(check===true)
    finalArray= {...data};

    return finalArray;
}

const TransactionData  = createContext(RequireContext);

export default TransactionData;
