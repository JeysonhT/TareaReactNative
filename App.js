import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Testimonio from "./components/Testimonio";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/logotipoFreeCodeCamp.jpg")}
        />
      </View>
      <Text style={styles.textStyle}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:{" "}
      </Text>
      <ScrollView style={styles.scrollStyle}>
        <Testimonio
          imagen={require("./assets/amarillo.jpg")}
          nombre={"Shawn Wang"}
          pais={"Singapur"}
          cargo={"Ingeniero de software en Amazon"}
          testimonio={
            "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          }
        ></Testimonio>
        <Testimonio
          imagen={require("./assets/negra.jpg")}
          nombre={"Sarah Chima"}
          pais={"Nigeria"}
          cargo={"Ingeniera de Software en ChatDesk"}
          testimonio={
            "FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
          }
        ></Testimonio>
        <Testimonio
          imagen={require("./assets/gringo.jpg")}
          nombre={"Emma Bostian"}
          pais={"Suecia"}
          cargo={"Ingeniera de Software en Spotify"}
          testimonio={
            "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          }
        ></Testimonio>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 50,
    backgroundColor: "#0000FFF",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: 80,
    width: "100%",
  },
  scrollStyle: {
    padding: 5,
    width: "100%",
  },
});
