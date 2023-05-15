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
      <Link to="./notice">Notice</Link>
      {/* . 은 현재 경로를 나타냄 */}
    </>
  )
}

const ProductsNotice = () => {
  const { id } = useParams();
  return (
    <>
      <h1>products page {id} - notice</h1>
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
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/">홈페이지</Link><br />
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}<br />
      <Link to='/cart'>Cart</Link><br />
      <Link to='/users/'>Users</Link><br />
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/products/:id/notice' element={<ProductsNotice />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/users/' element={<Users />}>
          <Route path='coupon/' element={<Coupon />} />
          <Route path='question/' element={<Question />} />
          <Route path='notice/' element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
