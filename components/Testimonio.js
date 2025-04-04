import { StyleSheet, View, Text, Image } from "react-native";

export default function Testimonio(props) {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewImageStyle}>
        <Image style={styles.imageStyle} source={props.imagen}></Image>
      </View>
      <View style={styles.viewTextStyle}>
        <Text style={styles.textNameStyle}>
          {props.nombre} en{" "}
          <Text style={{ fontWeight: "bold" }}>{props.pais}</Text>
        </Text>
        <Text style={styles.textCargoStyle}>{props.cargo}</Text>
        <Text style={styles.textStyle}>{props.testimonio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    minHeight: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
    padding: 0,
  },
  viewImageStyle: {
    flex: 3,
    alignSelf: "center",
  },
  textStyle: {
    padding: 0,
    marginBottom: 5,
  },
  textNameStyle: {
    padding: 0,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  textCargoStyle: {
    padding: 0,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  viewTextStyle: {
    flex: 4,
    alignSelf: "center",
    marginHorizontal: 3,
  },
  imageStyle: {
    height: "100%",
    minHeight: 250,
    width: "100%",
    alignSelf: "center",
    borderRadius: 13,
  },
});
