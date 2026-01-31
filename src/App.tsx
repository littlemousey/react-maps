import 'maplibre-gl/dist/maplibre-gl.css'
import { Marker, Popup, default as ReactMapGL } from 'react-map-gl/maplibre'
import './App.css'
import { Provider } from './components/ui/provider'
import { useState } from 'react'
import { useSavedCities, useCityActions } from './store/cityStore'
import { Tag } from '@chakra-ui/react'

function App() {
  const [selectedCity, setSelectedCity] = useState<{name: string, latitude: number, longitude: number} | null>(null)
  const savedCities = useSavedCities()
  const { toggleCity } = useCityActions()

  const cities = [
    { name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041, color: 'blue' },
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522, color: 'red' },
    { name: 'Berlin', latitude: 52.5200, longitude: 13.4050, color: 'green' },
    { name: 'Madrid', latitude: 40.4168, longitude: -3.7038, color: 'purple' },
    { name: 'Rome', latitude: 41.9028, longitude: 12.4964, color: 'orange' },
    { name: 'London', latitude: 51.5074, longitude: -0.1278, color: 'teal' },
    { name: 'Dublin', latitude: 53.3498, longitude: -6.2603, color: 'cyan' },
    { name: 'Brussels', latitude: 50.8503, longitude: 4.3517, color: 'pink' },
    { name: 'Vienna', latitude: 48.2082, longitude: 16.3738, color: 'brown' }
  ]

  return (
    <Provider>
      <div style={{ marginTop: 32, marginBottom: 16 }}>
        <h1>Europe Terrain Map</h1>
        <div style={{ marginTop: 16 }}>
          <h3>My Saved Cities ({savedCities.length})</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {savedCities.length === 0 ? (
              <p style={{ color: '#888' }}>Click on markers to add cities to your list</p>
            ) : (
              savedCities.map((cityName) => (
                <Tag.Root 
                  key={cityName}
                  colorPalette="blue"
                  size="md"
                >
                  <Tag.Label>{cityName}</Tag.Label>
                </Tag.Root>
              ))
            )}
          </div>
        </div>
      </div>
      <ReactMapGL
        initialViewState={{
          latitude: 50.5,
          longitude: 5,
          zoom: 4
        }}
        style={{width: 800, height: 600}}
        mapStyle="https://demotiles.maplibre.org/style.json"
        terrain={{source: "raster-dem-source", exaggeration: 0.5}}
      >
        {cities.map((city) => (
          <Marker 
            key={city.name}
            longitude={city.longitude} 
            latitude={city.latitude} 
            color={city.color}
            onClick={(e) => {
              e.originalEvent.stopPropagation()
              setSelectedCity(city)
            }}
          />
        ))}

        {selectedCity && (
          <Popup
            longitude={selectedCity.longitude}
            latitude={selectedCity.latitude}
            onClose={() => setSelectedCity(null)}
            closeOnClick={false}
          >
            <div className='city-popup'>
              <h3><b>{selectedCity.name}</b></h3>
              <p>Latitude: {selectedCity.latitude.toFixed(4)}</p>
              <p>Longitude: {selectedCity.longitude.toFixed(4)}</p>
              <button
                onClick={() => toggleCity(selectedCity.name)}
                style={{
                  marginTop: 8,
                  padding: '6px 12px',
                  backgroundColor: savedCities.includes(selectedCity.name) ? '#ff4444' : '#646cff',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14
                }}
              >
                {savedCities.includes(selectedCity.name) ? 'Remove from List' : 'Add to List'}
              </button>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </Provider>
  )
}

export default App
