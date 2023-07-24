import React from 'react'
import { Card, Row } from 'react-bootstrap'
import Cards from '../../components/Cards'
import { useSelector } from 'react-redux'

const Home = () => {
  const newsData=useSelector(state=>state)
  return (
    <div>
      {console.log(newsData)}
      <h1 className='text-info text-center my-5'>Today News </h1>

      <Row>
          {newsData.map(item=>(
            <Cards key={item.id} id={item.id} image={item.photo} desc={item.desc} title={item.title} />
          ))}
      </Row>
    </div>
  )
}

export default Home