import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { removeNews } from '../../manager/actions/newsAction'
import slugify from 'slugify'

const Dashboard = () => {
    const newsData=useSelector(p=>p)
    const dispatch=useDispatch()
  return (
    <div>
        <h1 className='text-center my-5'>Admin Panel</h1>
        <LinkContainer to={'/admin/add'}><Button variant='info'>ADD</Button></LinkContainer>
    <Table className='my-5' striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>PHOTO</th>
        <th>TITLE</th>
        <th>DESCRIPTION</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {newsData.map((item,count)=>(
        <tr>
        <td>{count +1}</td>
        <td><img src={item.photo} alt="error" /></td>
        <td>{item.title}</td>
        <td>{item.desc}</td>
        <td><LinkContainer to={`/admin/edit/${slugify(item.title)}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
        <td><Button onClick={() => { dispatch(removeNews({ id: item.id })) }}  variant='danger' ><i class="fa-solid fa-xmark"></i></Button></td>
      </tr>
      ))}



    </tbody>
  </Table>
  </div>
  )
}

export default Dashboard