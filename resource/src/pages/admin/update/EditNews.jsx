import React from 'react'
import NewsForm from '../NewsForm'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import slugify from 'slugify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editNews } from '../../../manager/actions/newsAction'

const EditNews = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {ne}=useParams()
    const newsdata=useSelector(p=>p)
    const newsprop=newsdata.find(p=>slugify(p.title)===ne)
  return (
    <div>
        <h1 className='text-center my-5'>Edit News</h1>
        <div className='d-flex justify-content-center'>
        <Col md={6}>
            <NewsForm editnews={newsprop}
            sendValue={(items)=>{
                dispatch(editNews(newsprop.id,items))
                navigate('/admin')
            }}/>
        </Col>
        </div>
        
    </div>
  )
}

export default EditNews