import React from 'react'
import './Record.css'

export default function Record({record}) {
  return (
    <div>
        <h1>Registro</h1>
        <span>Nome: {record.name}</span>
        <span>Valor: {record.value}</span>
        <span>Type: {record.type}</span>
        <span>Payment: {record.payment}</span>
        {/* <button type='button' onClick={()=> removeTask(record.id)}>x</button> */}
    </div>
  )
}
