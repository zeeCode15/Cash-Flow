import React, { useContext } from 'react'
import TransactionData from '../Contexts/TransactionData'
import './SettleUp.css'


function SettleUp() {
  const Data = useContext(TransactionData);

  // console.log('Mount Up');
  
  let recievedData = Data([], false);
  console.log(recievedData);

  const TransactionArray= [];

  for(let x in recievedData)
  {
    let val = recievedData[x];
    val = val.toFixed(2);
    TransactionArray.push([x, val]);
  }

  TransactionArray.sort((a, b)=>b[1]-a[1]);




  const finalSettlement = [];


  // const temp = [...[...TransactionArray]];
  const temp=[];

  TransactionArray.forEach(element => {

    temp.push([...element]);
    
  });

  while(temp.length>1)
  {
    const unitData ={From: null, To: null, Amount: 0 }

    temp.sort((a, b)=>b[1]-a[1]);

    let n = temp.length;

    let firstPerson= temp[0][0];
    let firstTransaction = temp[0][1];

    let lastPerson = temp[n-1][0];
    let lastTransaction = temp[n-1][1];


    if(firstTransaction===0)
    {
      // index, noOfElement
      break;
      // temp.splice(0, 1);
    }

    if(lastTransaction===0)
    {
      break;
      // temp.splice(n-1, 1);
    }

    temp.forEach(element => {
      console.log(element[0], element[1]);
      
    });

    console.log('lineChnaged');


    if(Math.abs(lastTransaction)>= firstTransaction)
    {
      unitData.From = lastPerson;
      unitData.To = firstPerson;

      unitData.Amount = Number(firstTransaction).toFixed(2);

      finalSettlement.push(unitData);

      temp[n-1][1]= Number(temp[n-1][1])+ Number(firstTransaction);


      temp.splice(0, 1);

    }
    else
    {
      unitData.From = lastPerson;
      unitData.To = firstPerson;

      unitData.Amount = Math.abs(lastTransaction).toFixed(2);

      finalSettlement.push(unitData);

      temp[0][1]= Number(temp[0][1]) +  Number(lastTransaction);


      temp.splice(n-1, 1);

    }

  }




  return (
    <>
    <div className='currentStatus'>

      {
        TransactionArray.length>0 ?

      <table border={1} >
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Current Status</th>
        </tr>
      

      {
        TransactionArray.map((e, idx)=>{
          return <tr>
            <td>{idx+1}</td>
            <td>{e[0]}</td>
            <td>{e[1]}</td>
          </tr>
        })
      }
      
      </table>
      : null}
      
    </div>


      <div className='suggestedPayment'>


        {
          finalSettlement.length >0 ? 

        
        <table border={1}>
        <caption> <b>Suggested Payment</b> </caption>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>




       {
         finalSettlement.map((e)=>{
          return <tr>
            <td>{e.From}</td>
            <td>{e.To}</td>
            <td>{e.Amount}</td>
          </tr>
          })
        }


        </table> : <div id='settled'> Automatically Settled !!</div>

        }

      </div>
    </>

  )
}

export default SettleUp
