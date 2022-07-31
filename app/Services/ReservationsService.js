import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";

class ReservationsService {
    addReservation(tripId, type, name, confNum, address, date, cost) {
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(tripId, type, name, confNum, address, date, cost)];
    }
}

export const reservationsService = new ReservationsService();