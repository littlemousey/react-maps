// import { Provider } from '@/components/ui/provider'
import { Map as MapLibreMap } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import './App.css'

import 'maplibre-gl/dist/maplibre-gl.css'

function App() {

  return (
    <>
      <MapLibreMap
      initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{width: 600, height: 400}}
        mapStyle="https://demotiles.maplibre.org/style.json"
      />
      <div>This is a map</div>
      {/* <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      mapLib={maplibregl}
      style={{width: 800, height: 600}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map> */}
    </>
  )
}

export default App
