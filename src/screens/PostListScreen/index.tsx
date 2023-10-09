import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import Header from '../../components/common/Header';
import PostListItem from '../../components/posts/PostListItem';
import Loader from '../../components/common/Loader';
import styles from './styles';
import {fetchPosts} from '../../service/post';

//Make any interface for declaring variable types
interface PostData {
  title: string;
  body: string;
}

const PostListScreen = () => {
  const [postData, setPostData] = useState<PostData[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // Pull to Refresh Function
  const onPullRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      fetchPosts();
      setIsRefreshing(false);
    }, 1000);
  }, []);

  // Making network call
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchPosts();
      //set Data in state
      setPostData(response);
      setLoading(false);
    } catch (err) {
      console.log(err, 'error');
    } finally {
      setLoading(false);
    }
  };

  const _postRenderItem = ({item}: any) => {
    return <PostListItem title={`${item.title}`} body={`${item.body}`} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <View style={styles.flatListContainer}>
        <FlatList
          // passing array to flatList
          data={postData}
          // make a function for list design and handling data
          renderItem={_postRenderItem}
          // using for unique IDs of every item
          keyExtractor={(item, index) => `${item}, ${index}`}
          // refresh Control is used for pull down to refresh the list
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onPullRefresh}
            />
          }
        />
      </View>
      <Loader loading={loading} isShowIndicator={true} />
    </SafeAreaView>
  );
};

export default PostListScreen;
