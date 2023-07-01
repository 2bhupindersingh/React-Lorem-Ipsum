import React, {useState, useEffect} from 'react'
import GlobalTitle from './GlobalTitle'
import LoremForm from './LoremForm';

const Lorem = () => {

  return (
    <div className='lorem-ipsum-container'>
        <GlobalTitle title='Lorem Ipsum App' />
        <LoremForm />
    </div>
  )
}

export default Lorem