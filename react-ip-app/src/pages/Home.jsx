import { useEffect, useState } from "react";
import { getGeo } from "../api/api";
import SearchBar from "../components/SearchBar";
import GeoInfo from "../components/GeoInfo";
import Map from "../components/Map";
import HistoryList from "../components/HistoryList";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [geo, setGeo] = useState(null);
  const [ip, setIp] = useState("");
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");

  console.log({ geo, history, selected });

  useEffect(() => { fetchGeo(); }, []);

  const clear = () => {
    setIp("");        
    fetchGeo();      
  };

  const fetchGeo = async (ipAddr = "") => {
    try {
        setError("");
        const geoData = await getGeo(ipAddr); 
        setGeo(geoData);

        if (ipAddr && !history.includes(ipAddr)) setHistory([ipAddr, ...history]);
    } catch {
        setError("Invalid IP address");
    }
    };

  const toggleSelect = (ip) => {
    setSelected(prev => prev.includes(ip) ? prev.filter(i => i !== ip) : [...prev, ip]);
  };

  const deleteSelected = () => {
    setHistory(history.filter(ip => !selected.includes(ip)));
    setSelected([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">IP Geolocation</h2>

        <SearchBar
          ip={ip}
          setIp={setIp}
          onSearch={() => fetchGeo(ip)}
          onClear={() => clear()}
        />

        <ErrorMessage message={error} />

        <GeoInfo geo={geo} />
        <Map latitude={geo?.latitude} longitude={geo?.longitude} />
        <h3 className="text-lg font-semibold mb-2">Search History</h3>
        <HistoryList
          history={history}
          selected={selected}
          toggleSelect={toggleSelect}
          fetchGeo={fetchGeo}
          deleteSelected={deleteSelected}
        />
      </div>
    </div>
  );
}