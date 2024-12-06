import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import Profile from './user/Profile.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'
import Products from './product/Products.jsx'
import ProductDetail from './product/ProductDetail.jsx'

import Menu from './core/Menu' 
function MainRouter() {
return (
<div>
 <Menu/>

 
 <Routes>
 <Route path="/" element={<Home />} /> 
 <Route path="/users" element={<Users />} /> 
 <Route path= "/products" element={<Products />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/signin" element={<Signin />} />
 <Route
 path="/user/edit/:userId"
 element={
 <PrivateRoute>
 <EditProfile />
 </PrivateRoute>
 }
 />
 <Route path="/user/:userId" element={<Profile />} />
 <Route path="/products/:productId" element={<ProductDetail/>}/>
</Routes>
</div>
 );
}

export default MainRouter
