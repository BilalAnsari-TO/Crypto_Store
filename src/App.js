import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Coins from './components/Coins'
import Home from './components/Home'
import Exchanges from './components/Exchanges'
import CoinDetails from './components/CoinDetails'
import Footer from './components/Footer'
import { Heading, Image, VStack } from '@chakra-ui/react'

const App = () => {
  const imageSrc = "https://media.istockphoto.com/id/1295689699/vector/print.jpg?s=612x612&w=0&k=20&c=o6VzHvVewc4JnDZAAeOMAjl8w6X6cLe0M4ql-flDKdU="
  return (
    <div>
      <Router>
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/exchanges' element={<Exchanges/>}/>
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path='*' element={<>
          <VStack alignItems={'center'} justifyContent={'center'} h={'90vh'} my={'8'}>
          <Image src={imageSrc}  alignSelf={'center'} />
          </VStack>
          </>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App