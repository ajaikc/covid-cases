import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface CovidState {
  updated: number;
  total: TotalData;
  states: StateData[];
}

const initialState: CovidState = {
  updated: 0,
  total: {
    active: 0,
    recovered: 0,
    deaths: 0,
    cases: 0,
    todayActive: 0,
    todayRecovered: 0,
    todayDeaths: 0,
    todayCases: 0,
  },
  states: [],
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData(state, action: PayloadAction<CovidState>) {
      state.updated = action.payload.updated;
      state.total = action.payload.total;
      state.states = action.payload.states;
    },
  },
});

export const { setCovidData } = covidSlice.actions;
export default covidSlice.reducer;
