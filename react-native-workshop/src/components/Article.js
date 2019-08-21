import React from 'react';
import { Linking, Image, View, Text, TouchableHighlight } from 'react-native';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, barStyle } = styles;
    const defaultImg = 'https://www.cancerresearchuk.org/sites/default/files/styles/cruk_no_style/public/img_cancernews_558x354_1.jpg';

    return (
      <TouchableHighlight
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}
          >
            <Image
              style={{width: '40%', minHeight: 100}}
              source={{uri: urlToImage || defaultImg}}
            />
            <Text style={{ width: '58%', marginBottom: 10 }}>
              {title || 'Read More..'}
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
          </View>
          <View style={barStyle}/>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 12
  },
  barStyle: {
    height: 2,
    width: '100%',
    backgroundColor: '#f0f0f0',
  }
};
