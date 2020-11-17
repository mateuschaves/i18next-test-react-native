import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Provider } from "@ant-design/react-native";
import RootNavigator from "./src/navigations/RootNavigator";

import "./i18n";

export default function App() {
  const [theme, setTheme] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [isReady, setIsReady] = useState(false);

  function changeTheme(theme, currentTheme) {
    setTheme(theme);
    setCurrentTheme(currentTheme);
  }

  useEffect(() => {
    loadAllFonts().then(() => setIsReady(true));
  }, []);

  async function loadAllFonts() {
    return Promise.all([
      await Font.loadAsync(
        "antoutline",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antoutline.ttf")
      ),
      await Font.loadAsync(
        "antfill",
        // eslint-disable-next-line
        require("@ant-design/icons-react-native/fonts/antfill.ttf")
      ),
    ]);
  }

  function renderLoading() {
    return <AppLoading />;
  }

  function renderContent() {
    return (
      <Provider theme={theme}>
        <RootNavigator screenProps={{ changeTheme, currentTheme }} />
      </Provider>
    );
  }

  return <>{!isReady ? renderLoading() : renderContent()}</>;
}
