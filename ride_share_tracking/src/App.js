import { LoadScript, GoogleMap } from '@react-google-maps/api';

function App() {
  const GOOGLE_MAPS_API_KEY = "AIzaSyDAN5GIGow9iIg5uwHIWze8Xak_pi8JFJg"; // Replace "YOUR_API_KEY" with your actual API key

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <div className="App">
        <h1>Google Maps API Test</h1>
        <div style={{ width: '100%', height: '400px' }}>
          <GoogleMap
            center={{ lat: (-1.9355377074007851, 30.060163829002217) }}
            zoom={12}
          />
        </div>
      </div>
    </LoadScript>
  );
}

export default App;
