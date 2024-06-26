import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}) {
  return (
    <Marker position={[item.latitude,item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} alt={item.title} />
            <div className="textContainer">
                <Link to={`/${item.id}`}><h4>{item.title}</h4></Link>
                <span>{item.bedroom} Bedroom</span>
                <b>$ {item.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin