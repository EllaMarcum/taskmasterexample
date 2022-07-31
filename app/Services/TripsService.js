import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";
import { Reservation } from "../Models/Reservation.js";

class TripsService {
    addTrip(name, notes) {
        ProxyState.trips = [...ProxyState.trips, new Trip(name, notes)];
    }

    deleteTrip(id) {
        ProxyState.reservations = ProxyState.reservations.filter(r => {
            return r.tripId != id;
        });
        
        ProxyState.trips = ProxyState.trips.filter(t => {
            return t.id != id;
        });
    }
}

export const tripsService = new TripsService();