// # Quiz - Route 사용하여 페이지 경로 만들기

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users

import React from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

const Products = () => {
  const { id } = useParams();
  return (
    <>
      <h1>products page {id}</h1>
    </>
  )
}

const Cart = () => {
  return (
    <>
      <h1>Shopping!</h1>
    </>
  )
}

const Users = () => {
  return (
    <>
      <h1>User Page</h1>
      <Outlet />
    </>
  )
}

const Coupon = () => {
  return (
    <>
      <h1>User Page - coupon</h1>
    </>
  )
}

const Question = () => {
  return (
    <>
      <h1>User Page - question</h1>
    </>
  )
}

const Notice = () => {
  return (
    <>
      <h1>User Page - notice</h1>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Index</Link><br />
      <Link to='/products/1'>Products1</Link><br />
      <Link to='/products/2'>Products2</Link><br />
      <Link to='/cart'>Cart</Link><br />
      <Link to='/users/*'>Users</Link><br />
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/users/*' element={<Users />}>
          <Route path='coupon/' element={<Coupon />} />
          <Route path='question/' element={<Question />} />
          <Route path='notice/' element={<Notice />} />
          {/* 여기 이상한데 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
