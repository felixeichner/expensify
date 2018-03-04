import moment from 'moment';

export default [{
  id: '1',
  description: 'Water bill',
  note: 'nothing to say',
  amount: 23000,
  createdAt: 0
}, {
  id: '2',
  description: 'Shopping',
  note: 'shoes and stuff',
  amount: 5000,
  createdAt: moment(0).add(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Rent',
  note: 'March rent',
  amount: 27200,
  createdAt: moment(0).subtract(1, 'days').valueOf()
}, {
  id: '4',
  description: 'Gas bill',
  note: '',
  amount: 7200,
  createdAt: moment(0).subtract(3, 'days').valueOf()
}];

