import Map from '../components/Map';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Leaflet Map Example</h1>
      <div className="w-full max-w-4xl">
        <Map />
      </div>
    </div>
  );
};

export default Index;