import React, { useState } from 'react'
import { useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([])
  // const getInfoCards = async () => {
  //   await fetch('http://localhost:3001/pets/card')
  //   .then(res => res.json())
  //   .then(data => setPeople(data))
  // }

  const swiped = (direction, nameToDelete) => {
    console.log('removing ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }

  useEffect(() => {
    async function fetchData() {
      const req = await fetch('http://localhost:3001/pets/card')
      setPeople(await req.json())
    }
    fetchData()
  }, [])

  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
      {people.map(p => (
        <TinderCard
          className='swipe'
          key={p.name}
          prevenSwipe={['up', 'down']}
          onSwipe={dir => swiped(dir, p.name)}
          onCardLeftScreen={() => outOfFrame(p.name)}
        >
          <div style={{backgroundImage: `url(${p.imgUrl})` }} className="card">
            <h3>{p.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards