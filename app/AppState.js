import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Trip } from "./Models/Trip.js"
import { Reservation } from "./Models/Reservation.js"

function _loadState() {
  let tempState = JSON.parse(window.localStorage.getItem('wayfair_data'));
  let state = { flag: '', trips: [], reservations: [] };
  if (tempState) {
    tempState.trips.forEach(t => {
      state.trips.push(Object.assign(new Trip(), t));
    });

    tempState.reservations.forEach(r => {
      state.reservations.push(Object.assign(new Reservation(), r));
    });
  } 
  
  return state;
}

class AppState extends EventEmitter {
  constructor() {
    super();

    const state = _loadState();
    this.flag = state.flag;
    this.trips = state.trips;
    this.reservations = state.reservations;
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
