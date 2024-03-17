import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#96DFFF",
    alignItems: "center",
  },
  currTeml: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 225,
    width: 214,
    height: 214,
    backgroundColor: "#43ACD9",
    borderRadius: 107,
  },
  currTemlText: {
    color: "white",
    fontSize: 65,
    fontWeight: "bold",
    paddingLeft: 35,
  },
  currTemlTextTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  maxTemp: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 145,
    left: 235,
    width: 99,
    height: 99,
    backgroundColor: "#43ACD9",
    borderRadius: 50,
  },
  maxTempText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  maxTempTextTitle: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
  minTemp: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 80,
    left: 300,
    width: 66,
    height: 66,
    backgroundColor: "#43ACD9",
    borderRadius: 50,
  },
  minTempText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  minTempTextTitle: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
  rect: {
    display: "flex",

    backgroundColor: "#43ACD9",
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 25,
    position: "absolute",
    top: height * 0.67,
  },
  rectCityText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 10,
  },
  rectDescText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 50,
    paddingBottom: 10,
  },
  rectPrecProbText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 10,
  },
  button: {
    display: "flex",
    backgroundColor: "#96DFFF",
    height: height * 0.05,
    width: width * 0.2,
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
