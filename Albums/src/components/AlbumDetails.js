import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
