import React from 'react'

function EntryRow({idx, dataEntry}) {
  return (
    <tr>

    <td>{idx}</td>
    <td>{dataEntry.Outlined}</td>
    <td>{dataEntry.From}</td>

    <td>
        <select name="" id="" style={{padding: '5px'}}>
            {

                dataEntry.To.map((e)=>{
                    return <option value="">{e}</option>
                })
            }
        </select>
    </td>
    <td>{dataEntry.Amount}</td>
        

    </tr>
  )
}

export default EntryRow
