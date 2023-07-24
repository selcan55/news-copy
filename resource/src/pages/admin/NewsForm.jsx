import React, { useState } from 'react'
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewsForm = ({sendValue,editnews}) => {
    
    const [photo,setPhoto]=useState(editnews? editnews.photo:'')
    const [title,setTitle]=useState(editnews? editnews.title:'')
    const [desc,setDesc]=useState(editnews? editnews.desc:'')

    const newsSubmited=e=>{
        e.preventDefault()
        sendValue({
            photo,
            title,
            desc
        })
    }

  return (
    
    <div>

        
    <Form onSubmit={newsSubmited}>
    <Form.Group className="mb-3">
      <Form.Label>Photo</Form.Label>
      <Form.Control value={photo} onChange={e=>{setPhoto(e.target.value)}} type="text" placeholder="Enter photo url" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control value={title} onChange={e=>{setTitle(e.target.value)}} type="text" placeholder="Enter title" />
    </Form.Group>

   
      <FloatingLabel label="Description">
        <Form.Control
          as="textarea"
          value={desc}
          onChange={e=>{setDesc(e.target.value)}}
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    
    <Button variant="primary my-5" type="submit">
      ADD
    </Button>

  </Form></div>
  )
}

export default NewsForm