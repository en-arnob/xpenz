import { StyleSheet, View, Text, Linking } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";
const url = "https://khalid-arnob.web.app";
const email = "en.arnob@gmail.com";
const github = "https://github.com/en-arnob";

const About = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 30,
          marginTop: 50,
          justifyConten: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#001E6C",
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
          }}
        >
          About
        </Text>
        <Text
          style={{
            marginTop: 40,
            fontSize: 60,
            color: "#001E6C",
            fontWeight: "bold",
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Xpenz
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#001E6C",
            fontWeight: "normal",
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10,
          }}
        >
          V 2.0
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#05595B",
            fontWeight: "bold",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          Design & Developmment:
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: "#001E6C",

            fontWeight: "bold",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Khalid Arnob
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            padding: 5,
          }}
        >
          <Icons name='web' size={20} color='green' />
          <Text onPress={() => Linking.openURL(url)} style={{ marginLeft: 10 }}>
            {url}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            padding: 5,
          }}
        >
          <Icons name='github' size={20} color='black' />
          <Text
            onPress={() => Linking.openURL(github)}
            style={{ marginLeft: 10 }}
          >
            {github}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            padding: 5,
          }}
        >
          <Icons name='email-variant' size={20} color='red' />
          <Text
            onPress={() => Linking.openURL(`mailto:${email}`)}
            style={{ marginLeft: 10 }}
          >
            {email}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: "black",

            paddingTop: 50,
            paddingBottom: 5,
          }}
        >
          © 2022 Khalid Arnob. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default About;
