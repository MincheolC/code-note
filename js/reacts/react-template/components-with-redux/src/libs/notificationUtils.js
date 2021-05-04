import moment from "moment";

export function getTitle(code) {
  switch (code) {
    case "PhHighLimitOver":
      return "PH 상한 초과";
    case "PhLowLimitOver":
      return "PH 하한 초과";
    case "TempHighLimitOver":
      return "온도 상한 초과";
    case "TempLowLimitOver":
      return "온도 하한 초과";
    case "DoHighLimitOver":
      return "DO 상한 초과";
    case "DoLowLimitOver":
      return "DO 하한 초과";
    case "BrixHighLimitOver":
      return "용존산소량 상한 초과";
    case "BrixLowLimitOver":
      return "용존산소량 하한 초과";
    default:
      return "Test";
  }
}

export function parseTimestamp(timestamp) {
  const m = moment(timestamp * 1000);
  return {
    year: m.year(),
    month: m.month(),
    date: m.date(),
    hour: m.hour(),
    minute: m.minute(),
    second: m.second(),
  };
}
