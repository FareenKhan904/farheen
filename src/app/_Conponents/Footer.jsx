import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container className=' mb-8 pt-0 text-lg  text-center font-medium text-darkcolor'>
        <h2>© {new Date().getFullYear()}. All rights reserved by Farheen</h2>
    </Container>
  )
}

export default Footer