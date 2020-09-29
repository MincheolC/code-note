const historyChartStyle = {
  container: {
    width: 1500,
    height: 700,
    overflow: "auto",
  },
  content: {
    width: (props) => (props.length > 90 ? props.length * 20 : "100%"),
    height: 650,
  },
  y: {
    position: "absolute",
    left: 0,
    top: 0,
    pointerEvents: "none",
  },
};
export default historyChartStyle;
