import React from 'react'

function Laureates({item}) {
  return (
    <div>
        {
            item ?
            item.map((item,idx) =>{
                return <span key={idx}>  
                        {item.firstname} {item.surname}
                    </span>
            })
            : null
        }
    </div>
  )
}

export default Laureates