import Filter from '../../components/filter/Filter';
import Card from "../../components/card/Card"
import { listData } from '../../lib/dummydata'
import Map from '../../components/map/Map'
import './listPage.scss'

function ListPage() {
  const data = listData;
  return (
    <div className="listdata">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map((item) => {
              return <Card key={item.id} data={item} />
            })
          
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map data={data}/>
      </div>
    </div>
  )
}

export default ListPage