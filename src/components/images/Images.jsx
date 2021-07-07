import React, {useContext, useState} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import {AiTwotoneLike} from 'react-icons/ai'
import image1 from '../../asset/image1.jpg'
import { GlobalContext } from '../../context/GlobalContext'
import './images.css'
export default function Images() {
    const [comment, setComment] = useState('')
    const[openFooter, setOpenFooter] = useState(false)
    const {addComment} = useContext(GlobalContext)
    /**submit comments */
    const submitComment = e =>{
        e.preventDefault()
        addComment(comment)
        setComment('')
        setOpenFooter(false)
    }

    const likeComment = e =>{
        console.log('hello')
    }
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div className='btns'>
                        <Button variant='secondary' onClick={likeComment}><AiTwotoneLike color/></Button>
                        <Button variant='secondary' onClick={() => setOpenFooter(true)}> Comment</Button>
                    </div>                    
                </Card.Body>
                {openFooter && <Card.Footer>
                    <div className='footer'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" className="avatar" />
                        <Form onSubmit={()=>console.log('haha')}>                        
                            <Form.Group  controlId="exampleForm.ControlTextarea1">                            
                            <Form.Control 
                                value={comment}
                                onChange={e=>setComment(e.target.value)}
                                type='submit' 
                                placeholder='write a comment...' 
                                as="textarea" 
                                rows={2} />
                            </Form.Group>
                        </Form>  
                        <Button onClick={submitComment} variant='secondary'>Submit</Button>                      
                    </div>
                </Card.Footer>
                }
            </Card>
        </div>
    )
}
