import jsonData from "../api.json";
import CovidTrackerContainer from "../Components/CovidTrackerContainer/CovidTrackerContainer";

export default function Home() {
  const apiData = jsonData;
  return (
    <div>
      <CovidTrackerContainer apiData={apiData} />
    </div>
  );
}
