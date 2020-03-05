import moment from "moment";

const generateRandomData = () => {
  const data = [];
  let start = 0;
  const end = 24;
  while (start <= end) {
    const dataSet = {};
    dataSet["key"] = start;
    dataSet["data"] = (Math.random() * (1000 - 10) + 10).toFixed(2);
    data.push(dataSet);
    start = start + 1;
  }
  return data;
};

const getDay = date => {
  const day = moment(date).day();
  switch (day) {
    case 0:
      return "SUN";
    case 6:
      return "SAT";
    case 5:
      return "FRI";
    case 4:
      return "THU";
    case 3:
      return "WED";
    case 2:
      return "TUE";
    case 1:
      return "Mon";
    default:
      break;
  }
};

const generateDates = (rangeStart, rangeFinish) => {
  const heatMapData = [];
  const end = moment(rangeFinish);
  let start = moment(rangeStart);

  while (start <= end) {
    const dataSet = {};
    dataSet["date"] = start;
    dataSet["key"] = getDay(start);
    dataSet["data"] = generateRandomData();
    heatMapData.push(dataSet);
    start = moment(start).add(1, "days");
  }
  return heatMapData;
};
const getTheDay = day => {
  switch (day) {
    case 0:
      return "Sun";
    case 6:
      return "Sat";
    case 5:
      return "Fri";
    case 4:
      return "Thur";
    case 3:
      return "Wed";
    case 2:
      return "Tue";
    case 1:
      return "Mon";
    default:
      break;
  }
};

const generateDayData = () => {
  const dayData = [];
  let start = 0;
  const end = 7;
  while (start < end) {
    const day = {};
    day["key"] = getTheDay(start);
    day["data"] = Number((Math.random() * (800 - 0) + 0).toFixed(2));
    day["metadata"] = {
      previousPeriod: Number((Math.random() * (800 - 0) + 0).toFixed(2))
    };
    day.metadata = {
      ...day.metadata,
      percentageDiff: Number(
        parseFloat(
          ((Number(day.data) - Number(day.metadata.previousPeriod)) /
            ((Number(day.data) + Number(day.metadata.previousPeriod)) / 2)) *
            100
        ).toFixed(4)
      )
    };

    dayData.push(day);
    start = start + 1;
  }

  return dayData;
};

const getHour = hour => {
  let setHour = hour;
  const amOrPm = hour >= 12 ? "pm" : "am";
  setHour = hour % 12 || 12;
  const finalTime = `${setHour}${amOrPm}`;

  return finalTime;
};

const generateDataToo = () => {
  const heatMapData = [];

  let start = 0;
  const end = 23;

  while (start <= end) {
    const hourSet = {};
    hourSet["key"] = getHour(start);
    hourSet["id"] = start;
    hourSet["data"] = generateDayData();

    heatMapData.push(hourSet);
    start = start + 1;
  }

  return heatMapData;
};

export { generateDates, generateDataToo };
