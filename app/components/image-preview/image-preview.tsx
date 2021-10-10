import React, { useCallback, useState } from "react";
import { ImagePreviewProps } from "./image-preview.props";
import styled from "@emotion/native";
import { spacing } from "../../config";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@emotion/react";
import {
  connectActionSheet,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import * as ImagePicker from "expo-image-picker";
import { MediaTypeOptions } from "expo-image-picker";
import SnapView from "../snap-view/snap-view";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";

const ImageContainer = styled.Pressable(props => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 216,
  borderRadius: spacing[1],
  backgroundColor: props.theme.palette.white,
}));

const StyledImageBackground = styled.ImageBackground({
  flex: 1,
  width: "100%",
  justifyContent: "flex-end",
});

const styles = StyleSheet.create({
  coverImage: {
    borderRadius: spacing[1],
  },
});

const _ImagePreview: React.FC<ImagePreviewProps> = props => {
  const theme = useTheme();
  const { showActionSheetWithOptions } = useActionSheet();
  const [showSnapView, setShowSnapView] = useState<boolean>(false);

  const setImage = useCallback((uri: string) => props.onImageSelected(uri), []);

  async function showImageGalleryAsync() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return setImage(undefined);
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setImage(result.uri);
    }
  }

  const handleOnPress = () => {
    !props.image &&
      showActionSheetWithOptions(
        {
          options: ["Take one from Camera", "Select from Gallery", "Cancel"],
          title: "Select a Cover Image",
          message: "Choose one of these options and select an Image",
          cancelButtonIndex: 2,
        },
        async i => {
          switch (i) {
            case 0:
              setShowSnapView(true);
              break;

            case 1:
              await showImageGalleryAsync();
              break;

            default:
              return null;
          }
        },
      );
  };

  return (
    <>
      <ImageContainer onPress={handleOnPress}>
        {props.image ? (
          <StyledImageBackground
            source={{ uri: props.image }}
            imageStyle={styles.coverImage}>
            <LinearGradient
              style={{
                borderRadius: spacing[1],
              }}
              colors={["transparent", "rgba(0, 0, 0, .8)"]}>
              <Button
                color={theme.palette.red[500] as string}
                mode="outlined"
                icon="delete"
                onPress={() => setImage(undefined)}>
                Remove
              </Button>
            </LinearGradient>
          </StyledImageBackground>
        ) : (
          <MaterialIcon
            name="camera"
            size={spacing[7]}
            color={theme.palette.blueGrey[100]}
          />
        )}
      </ImageContainer>

      {showSnapView && (
        <SnapView
          visible={showSnapView}
          onSnapTaken={setImage}
          onViewClose={() => setShowSnapView(false)}
        />
      )}
    </>
  );
};

const ImagePreview = connectActionSheet(_ImagePreview);

export default ImagePreview;
