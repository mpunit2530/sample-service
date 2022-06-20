import { Router } from 'express';
import sailingList from '../utils';

const router = Router();

router.get('/cheapest', (req, res) => {
  const cheapestSailing = sailingList.reduce(function (prev, curr) {
    return +prev.rate < +curr.rate ? prev : curr;
  });

  return res.send(cheapestSailing);
});

router.get('/fastest', (req, res) => {
  const fastestSailing = sailingList.reduce(function (prev, curr) {
    return prev.duration_in_days < curr.duration_in_days
      ? prev
      : curr;
  });
  return res.send(fastestSailing);
});

router.get('/cheapest-leg', (req, res) => {
  return res.send([]);
});

export default router;
