import { generateId } from "../Utils/generateId.js"

export class Reservation {
    constructor(tripId, type, name, confNumber, address, date, cost) {
        this.id = generateId();
        this.tripId = tripId;
        this.type = type;
        this.name = name;
        this.confNumber = confNumber;
        this.address = address;
        this.date = date;
        this.cost = cost;
    }

    get ReservationTemplate() {
        return `
        <div class="row">
              <div class="col-1">${this.type}</div>
              <div class="col-2">${this.name}</div>
              <div class="col-3">${this.confNumber}</div>
              <div class="col-3">${this.address}</div>
              <div class="col-2">${this.formatDate(this.date)}</div>
              <div class="col-1">${this.cost}</div>
            </div>
            `;
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}