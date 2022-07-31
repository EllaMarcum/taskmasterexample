import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js"

export class ReservationsController {
    addReservation(tripId, type, name, confNum, address, date, cost) {
        reservationsService.addReservation(tripId, type, name, confNum, address, date, cost);
    }
}