"use client";
import React, { useEffect, useState } from "react";
import CovidTracker from "../CovidTrackerComponents/CovidTracker";

interface StateData {
  state: string;
  active: number;
  recovered: number;
  deaths: number;
  cases: number;
  todayActive: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
}

interface TotalData {
  active: number;
  recovered: number;
  deaths: number;
  cases: number;
  todayActive: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
}

interface CovidData {
  updated: number;
  total: TotalData;
  states: StateData[];
}

interface CovidTrackerContainerProps {
  apiData: CovidData;
}

function CovidTrackerContainer({ apiData }: CovidTrackerContainerProps) {
  const [data] = useState<CovidData>(apiData);
  const [states, setStates] = useState<string[]>([]);
  const [total, setTotal] = useState<TotalData>(apiData?.total);
  const [selectedState, setSelectedState] = useState<string | undefined>();
  const [selectedStateData, setSelectedStateData] = useState<StateData | undefined>();

  useEffect(() => {
    setStates(apiData.states.map((state) => state.state));
  }, [apiData]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const onStateChange = (value: string) => {
    setSelectedState(value);

    const stateData = data.states.find((state) => state.state === value);
    setSelectedStateData(stateData);
  };


  return (
    <div>
      <CovidTracker
        states={states}
        total={total}
        onStateChange={onStateChange}
        selectedState={selectedState}
        selectedStateData={selectedStateData}
        data={data}
      />
    </div>
  );
}

export default CovidTrackerContainer;
