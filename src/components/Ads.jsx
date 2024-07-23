import React from 'react'
import Ad from '../Data/DcphAds.json'
import { Link } from 'react-router-dom'

const Ads = (props) => {
    let n = props.number

  return (
    <div className='mt-2 object-scale-down'>
      <Link to={Ad[n].link}><img src={Ad[n].photos}></img></Link>
    </div>
  )
}

export default Ads