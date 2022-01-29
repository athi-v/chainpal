import React from 'react';
import Heroimg from '../assets/crypto.png'
import './Hero.css'

const Hero = () => {
  return (
  <div class='hero'>
<div class="container-fluid">
<div class="row">

<div class="col-lg-6">
<p>Buy & Sell Sell Crypto 24/7 using you retirement account</p>
                    <h1>Invest in Cryptocurrency now</h1>
                    <p>Buy, Sell and store Cryptocurrency</p>
  <div class='form-div'></div>
  <form>
    <input type='email' placeholder='Enter your email'></input> <button class='btn btn-primary'>Learn More</button>
  </form>
</div>

<div class="col-lg-6">
<img class='title-image' src={Heroimg}  alt='hero' />
</div>
</div>
</div>
</div>

  )
}

export default Hero;
