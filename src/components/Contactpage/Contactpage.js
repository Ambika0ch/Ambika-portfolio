import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        {/* <p className='contactpara'> I’m currently searching for opportunities for a front-end developer role. 
        <br /> If there is any vacancy my inbox is always open. Whether <br />
         you have any further questions or just want to say hi, <br /> I’ll try
          my best to get back to you!</p> */}
        {/* <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+918156811884");
          }}
        >Contact us</button> */}
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" placeholder="Text" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>


          <div class="form-group">
            <label for="exampleFormControlTextarea1">Write a msg </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className='contactbtn'>Submit</button>
        </form>

        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
          <br />
          Designed by <span>Ambika</span></p>
      </Container>
    </div>
  )
}

export default Contactpage