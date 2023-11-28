import React from 'react'
import './Record.css'

export default function Record({record, removeRecord}) {
  return (
    <div className='record'>
        <div className='remove_button_wrapper'>
            <button className='remove_button' type='button' onClick={()=> removeRecord(record.id, record.type)}>x</button>
        </div>
        <div>
            <div><strong>Nome:</strong> {record.name}</div>
            <div><strong>Valor:</strong> {record.value}</div>
            <div><strong>Pagamento:</strong> {record.payment}</div>
        </div>
        
    </div>
  )
}
