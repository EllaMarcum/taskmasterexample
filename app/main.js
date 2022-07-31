import { TripsController } from "./Controllers/TripsController.js";
import { ReservationsController } from "./Controllers/ReservationsController.js"

class App {
  tripsController = new TripsController();
  reservationsController = new ReservationsController();
}

window["app"] = new App();
