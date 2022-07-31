import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";

function _draw() {
    let trips = ProxyState.trips;
    let reservations = ProxyState.reservations;
    let tripsTemplate = '';
    let reservationsTemplate = '';

    trips.forEach(t => tripsTemplate += t.TripTemplate);
    document.getElementById("app").innerHTML = tripsTemplate;

    reservations.forEach(r => {
        document.getElementById(r.tripId).innerHTML += r.ReservationTemplate;
    });

    trips.forEach(t => {
        document.getElementById(t.id).innerHTML += t.ReservationFormTemplate;
    });
}

function _onDataChange() {
    _saveState();
    _draw();
}

function _saveState() {
    window.localStorage.setItem('wayfair_data', JSON.stringify({trips: ProxyState.trips, reservations: ProxyState.reservations}));
}

export class TripsController {
    constructor() {
        ProxyState.on("trips", _onDataChange);
        ProxyState.on("reservations", _onDataChange);
        _draw();
    }

    addTrip(name, notes) {
        tripsService.addTrip(name, notes);
    }

    deleteTrip(id) {
        tripsService.deleteTrip(id);
    }
}