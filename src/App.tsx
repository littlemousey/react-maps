import 'maplibre-gl/dist/maplibre-gl.css'
import { Marker, default as ReactMapGL } from 'react-map-gl/maplibre'
import './App.css'
import { Provider } from './components/ui/provider'

function App() {

  return (
    <Provider>
      <div>This is a map</div>
      <ReactMapGL
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      // mapLib={maplibregl}
      style={{width: 800, height: 600}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </ReactMapGL>
    </Provider>
  )
}

export default App
