import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ImageBackground } from "react-native-web";
import { textShadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: 'row',
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 60,
    width: 60,
    margin: 2.5
  
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,

  },
  cardContainerStyle: {
    borderWidth: 5,
    borderRadius:10,
    borderColor: "#819AFB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#819AFB",
    borderColor: "",
    borderBottomWidth: 1,
   

  },
  imageStyle: {
    height: 300,
    width: null
  }
  
});

export default AlbumDetail;