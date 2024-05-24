import React from 'react'
import Card from './Card'

function Tours(tours) {
  return (
    <div>
        <div>
            <h2>Deatinations</h2>
        </div>
        <div>
            {
                tours.map((tour) => {
                    return <Card {...tour}/>
                })
            }   
        </div>
    </div>
  )
}

export default Tours
