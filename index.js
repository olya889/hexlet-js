import _ from "lodash";

const d = _.last([1, 2]);
const fn = (a, b) => {
  const c = a + b;
  return c;
};

fn(1, d);
