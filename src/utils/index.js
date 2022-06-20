const jsonResponse = require('../data/response.json');

const { sailings, rates, exchange_rates } = jsonResponse || {};

const sailingList = [sailings, rates].reduce((a, b) =>
  a.map((c, i) => {
    if (c.sailing_code === b[i].sailing_code) {
      const arrivalDate = new Date(c.arrival_date);
      const departureDate = new Date(c.departure_date);
      const sailingDuration = parseInt(
        (arrivalDate - departureDate) / (1000 * 60 * 60 * 24),
        10,
      );
      let sailingObject = { ...c, ...b[i] };
      sailingObject['duration_in_days'] = sailingDuration;
      return sailingObject;
    }
  }),
);

export default sailingList;