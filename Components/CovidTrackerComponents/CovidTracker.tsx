import React from "react";
import { Row, Col } from "reactstrap";
import dynamic from "next/dynamic";
import "./module.css";

// import PieChart from "./PieChart";
// import LineChart from './LineChart'
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
  loading: () => <p>Loading PieChart...</p>,
});
const LineChart = dynamic(() => import("./LineChart"), {
  ssr: false,
  loading: () => <p>Loading LineChart...</p>,
});
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

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

interface CovidTrackerProps {
  states: string[];
  total: TotalData;
  selectedState: string | undefined;
  onStateChange: (value: string) => void;
  selectedStateData: StateData | undefined;
  data: {
    updated: number;
    total: TotalData;
    states: StateData[];
  };
}

const CovidTracker: React.FC<CovidTrackerProps> = ({
  states,
  total,
  selectedState,
  onStateChange,
  selectedStateData,
  data,
}) => {
  return (
    <Row>
      <Col md="12" className="mainSec">
        <h2> Covid Tracker -IND</h2>
        <Row>
          <Col md="12" className="list-block">
            <Col md="3" className="ind-cases-block">
              <label htmlFor="">Total Cases</label> <p>{total?.cases}</p>
            </Col>
            <Col md="3" className="ind-cases-block">
              <label htmlFor=""> Active Cases</label>
              <p>{total?.active}</p>
            </Col>
            <Col md="3" className="ind-cases-block">
              <label htmlFor=""> Recovered</label>
              <p>{total?.recovered}</p>
            </Col>
            <Col md="3" className="ind-cases-block">
              <label htmlFor=""> Death</label>
              <p>{total?.deaths}</p>
            </Col>
          </Col>
        </Row>
          <hr/>
        <Row>
          <Col md="12" className="mt-5 stateWise">
         
            <h4>Covid track by State wise</h4>
            <div>
              <label>Filter by State: </label>
              <select
                value={selectedState}
                onChange={(e) => onStateChange(e?.target?.value)}
              >
                <option value="All">All</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="state-case-block d-flex mt-5">
            <Col md="6">
              <Col md="3" className="state-cases-block">
                <label htmlFor="">Total Cases</label>{" "}
                <p>{selectedStateData?.cases}</p>
              </Col>
              <Col md="3" className="state-cases-block">
                <label htmlFor=""> Active Cases</label>
                <p>{selectedStateData?.active}</p>
              </Col>
              <Col md="3" className="state-cases-block">
                <label htmlFor=""> Recovered</label>
                <p>{selectedStateData?.recovered}</p>
              </Col>
              <Col md="3" className="state-cases-block">
                <label htmlFor=""> Death</label>
                <p>{selectedStateData?.deaths}</p>
              </Col>
            </Col>
            <Col md="6">
              <PieChart
                selectedState={selectedState}
                selectedStateData={selectedStateData}
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="d-flex">
            <Col md="6">
              <LineChart selectedStateData={selectedStateData} />
            </Col>
            <Col md="6">
              <MapComponent data={data} />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CovidTracker;
