import React, { useEffect, useRef, useState } from "react";
import { SnapViewProps } from "./snap-view.props";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import styled from "@emotion/native";
import { CameraType } from "expo-camera/build/Camera.types";
import { Button } from "react-native-paper";
import { useTheme } from "@emotion/react";

const StyledCamera = styled(Camera)({
  flex: 1,
});

const Container = styled.View({
  flex: 1,
  backgroundColor: "transparent",
  justifyContent: "flex-end",
});

const BottomContent = styled.View({
  flexDirection: "row",
  backgroundColor: "black",
  alignItems: "center",
  justifyContent: "space-between",
});

const CloseButton = styled(Button)({
  marginLeft: 12,
});

const CameraModeToggle = styled(Button)({
  marginRight: 12,
});

const SnapButton = (props: { onPress: () => Promise<void> }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    innerCircle: {
      backgroundColor: theme.palette.white,
      borderColor: theme.palette.white,
      borderRadius: 50,
      borderWidth: 2,
      height: 40,
      width: 40,
    },
    outerCircle: {
      alignItems: "center",
      borderColor: theme.palette.white,
      borderRadius: 50,
      borderWidth: 2,
      display: "flex",
      height: 50,
      justifyContent: "center",
      marginBottom: 16,
      marginTop: 16,
      width: 50,
    },
  });

  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
    </Pressable>
  );
};

const SnapView: React.FC<SnapViewProps> = ({
  visible,
  onSnapTaken,
  onViewClose,
}) => {
  const cameraRef = useRef<Camera>(null);
  const [cameraMode, setCameraMode] = useState<CameraType>(
    Camera.Constants.Type.back,
  );
  const [hasPermissionGranted, setHasPermissionGranted] = useState<boolean>(
    false,
  );

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermissionGranted(status === "granted");
    })();
  }, []);

  async function takeSnapAsync() {
    const { uri } = await cameraRef.current.takePictureAsync();
    onSnapTaken(uri);
    onViewClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onViewClose}>
      {hasPermissionGranted && (
        <StyledCamera
          ratio="16:9"
          flashMode={Camera.Constants.FlashMode.auto}
          type={cameraMode}
          ref={cameraRef}>
          <Container>
            <BottomContent>
              <CloseButton
                icon="close"
                mode="outlined"
                color="white"
                onPress={onViewClose}>
                Close
              </CloseButton>

              <SnapButton onPress={takeSnapAsync} />

              <CameraModeToggle
                icon="axis-z-rotate-clockwise"
                mode="outlined"
                color="white"
                onPress={() =>
                  setCameraMode(mode =>
                    mode === CameraType.front
                      ? CameraType.back
                      : CameraType.front,
                  )
                }>
                {cameraMode === CameraType.front ? "Back" : "Front"}
              </CameraModeToggle>
            </BottomContent>
          </Container>
        </StyledCamera>
      )}
    </Modal>
  );
};

export default SnapView;
