import * as React from "react";
import { ScreenProps } from "./screen.props";
import { useNavigation } from "@react-navigation/native";
import { useIsFirstRoute } from "../../hooks";
import Header from "../header/header";
import styled from "@emotion/native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { useTheme } from "@emotion/react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Container = styled.View({
  flex: 1,
});

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});

const Screen: React.FC<ScreenProps> = props => {
  const { style, title, showHeader = true, statusBarColor } = props;
  const navigation = useNavigation();
  const isFirstRoute = useIsFirstRoute();
  const theme = useTheme();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StyledSafeAreaView
        edges={["top"]}
        style={{ backgroundColor: statusBarColor || theme.background[100] }}>
        <ActionSheetProvider>
          <Container style={style}>
            {!isFirstRoute && showHeader && (
              <Header
                title={title}
                handleBackButtonClick={() => navigation.goBack()}
              />
            )}
            {props.children}
          </Container>
        </ActionSheetProvider>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;
