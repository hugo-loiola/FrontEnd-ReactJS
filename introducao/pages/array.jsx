import React from 'react'
import Cabecalho from '../components/Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

const array = () => {

  return (
    <>

      <Cabecalho />
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container >
          <h1>Array</h1>
        </Container>
      </div>
      <div style={{ width: '100%' }} className='bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
        <p>Todos os direitos reservados®</p>
      </div>
    </>
  )
}

export default array