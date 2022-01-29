import React from 'react';
import Crypto from '../assets/earn.png'
import './Sign.css'
const Sign = () => {
  return (
  <div className='sign'>
      <div class="container-fluid">
<div class="row">

<div class="col-lg-6">
<img class='title-image' src={Crypto}  alt='hero' />

</div>

<div class="col-lg-6">
<h1>Earn an income with cryptocurrency</h1>
    <p>Earn up to 14% annual rewards on over 20 digital assests</p>
  <div class='form-div'></div>
  <form>
    <input type='email' placeholder='Enter your email'></input> <button class='btn btn-primary'>Learn More</button>
  </form>
</div>
</div>
</div>
</div>

  )
}

export default Sign;
