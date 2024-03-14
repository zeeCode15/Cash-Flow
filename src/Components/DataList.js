import React from 'react'
import './CssFiles/DataList.css'
import EntryRow from './EntryRow';


function DataList({dataEntry}) {
  return (
    <div className='dataListContainer'>

      <div>


    <table border={1}>

      {dataEntry.length > 0?
       <tr>
        <th>S/N</th>
        <th>Outlined</th>
        <th>Payer</th>
        <th>Split-Among</th>
        <th>Amount</th>
        </tr>
      : null}


      {dataEntry.map((e, i)=>{
        return  <EntryRow dataEntry={dataEntry[i]} idx={i+1}/>
      })}


    </table>

    </div>


    </div>
  )
}

export default DataList
