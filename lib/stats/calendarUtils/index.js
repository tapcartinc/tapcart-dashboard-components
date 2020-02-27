import { range, min } from "d3-array";

const weekDays = (() => {
  const base = new Date(Date.UTC(2017, 0, 2));
  return range(7).map(() => {
    const name = base.toLocaleDateString("default", { weekday: "short" });
    base.setDate(base.getDate() + 1);
    return name;
  });
})();

export { weekDays };
