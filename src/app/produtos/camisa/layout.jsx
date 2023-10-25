import React from 'react'

export default function CamisaLayout({children}) {
  return (
    <div>
        <p className='bg-red-200'>Novas Camisas de Fio Egípicio...</p>
        {children}
    </div>
  )
}
