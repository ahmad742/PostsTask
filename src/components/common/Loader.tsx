import React from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native';


const Loader = (props: any) => {
    
    const {
        loading,
        isShowIndicator
    } = props

    if (loading)
        return (
            <View style={styles.container}>
                {/* {loading && */}
                {isShowIndicator &&
                    <ActivityIndicator
                        animating={isShowIndicator}
                        size={'large'}
                        color={"black"}
                        style={{ marginLeft: 5 }}
                    />
                }
            </View>
        )
    else return null
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Loader;
