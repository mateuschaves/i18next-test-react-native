import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@ant-design/react-native";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [name] = useState("Mateus");
  const [t, i18n] = useTranslation();

  function handleChangeLanguage(language) {
    console.log(i18n);
    i18n.changeLanguage(language);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("greeting-title", { name })}</Text>
      <Button
        type="primary"
        style={styles.button}
        onPress={() => handleChangeLanguage("pt_br")}
      >
        pt_br
      </Button>
      <Button
        type="primary"
        style={styles.button}
        onPress={() => handleChangeLanguage("en")}
      >
        en
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    margin: 8,
  },
});
