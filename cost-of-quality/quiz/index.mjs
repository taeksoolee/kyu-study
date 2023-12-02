import data from '../../data/cost-of-qaulity.mjs';

const categories = Object.keys(data);
window.categories = categories;

const {map, flatten, shuffle} = _;
window.data = data;
// const list = flatten(map(data, (e, k) => [...map(e.list, (v => ({question: v, answer: k, input: categories[0]})))]));
const list = flatten(map(data, (e, k) => [...map(e.list, (v => ({question: v, answer: k, input: null})))]));
window.paper = shuffle(list);
