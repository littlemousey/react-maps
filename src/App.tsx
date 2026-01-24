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
      <Marker longitude={4.9041} latitude={52.3676} color="blue" />
    </ReactMapGL>
      <div style={{marginTop: 32}}>Europe Terrain Map</div>
      {/* The style below must include a raster-dem-source and terrain layer for terrain to work. */}
      <ReactMapGL
        initialViewState={{
          latitude: 54,
          longitude: 15,
          zoom: 4
        }}
        style={{width: 800, height: 600}}
        mapStyle="https://demotiles.maplibre.org/style.json"
        terrain={{source: "raster-dem-source", exaggeration: 0.5}}
      />
      <div style={{
        marginTop: 32,
        padding: 16,
        border: '1px solid #ccc',
        borderRadius: 8,
        width: 320,
        background: '#8eb2e0ff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{marginTop: 0}}>Legenda</h3>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
          <span style={{width: 16, height: 16, background: 'red', borderRadius: '50%', display: 'inline-block', marginRight: 8}}></span>
          San Francisco Marker
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
          <span style={{width: 16, height: 16, background: 'blue', borderRadius: '50%', display: 'inline-block', marginRight: 8}}></span>
          Amsterdam Marker
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span style={{width: 16, height: 16, background: 'linear-gradient(135deg, #a3c9a8 0%, #6e7f80 100%)', borderRadius: '4px', display: 'inline-block', marginRight: 8, border: '1px solid #888'}}></span>
          Terrain/Elevation Map (Europe)
        </div>
      </div>
    </Provider>
  )
}

export default App
