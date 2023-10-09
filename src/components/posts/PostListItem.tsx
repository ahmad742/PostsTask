import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../screens/PostListScreen/styles';

interface PostListProps {
  title: string;
  body: string;
}

const PostListItem: React.FC<PostListProps> = props => {
  const {title, body} = props;

  return (
    <View style={styles.listViewContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

export default PostListItem;
