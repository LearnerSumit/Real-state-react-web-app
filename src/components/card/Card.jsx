import './card.scss'
import pin from '../../assets/pin.png'
import bath from '../../assets/bath.png'
import bed from '../../assets/bed.png'
import save from '../../assets/save.png'
import chat from '../../assets/chat.png'
import { Link } from 'react-router-dom'
function Card({data}) {
  return (
    <div className="card">
      <Link to={`/${data.id}`} className='imageContainer'>
        <img src={data.img} alt="" />
      </Link>
      <div className="textcontainer">
        <h2 className="title">
          <Link to={`/${data.id}`}>{data.title}</Link>
        </h2>
        <p className="address">
          <img src={pin} />
          <span>{data.address}</span>
        </p>
        <p className="price">$ {data.price}</p>
        <div className="bottom">
          <div className="featurs">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{data.bedroom} bedrooms</span>
            </div>
            <div className="feature">
              <img src={bath} alt="" />
              <span>{data.bathroom} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt="" />
            </div>
            <div className="icon">
              <img src={chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card