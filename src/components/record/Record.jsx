import React from 'react'
import './Record.css'

export default function Record({record, removeRecord}) {
  return (
    <div className='record'>
        <span><strong>Nome:</strong> {record.name}</span>
        <span><strong>Valor:</strong> {record.value}</span>
        <span><strong>Type:</strong> {record.type}</span>
        <span><strong>Payment:</strong> {record.payment}</span>
        <button className='remove_button' type='button' onClick={()=> removeRecord(record.id, record.type)}>x</button>
    </div>
  )
}
