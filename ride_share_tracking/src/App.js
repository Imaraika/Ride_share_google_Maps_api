import { LoadScript } from '@react-google-maps/api';

function App() {
  const GOOGLE_MAPS_API_KEY = "AIzaSyDrZExy1e1Lq6D_6Qb1T088LBG4AAPoqlg"; // Replace "YOUR_API_KEY" with your actual API key

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <div className="App">
        {/* Your application content goes here */}
      </div>
    </LoadScript>
  );
}

export default App;
