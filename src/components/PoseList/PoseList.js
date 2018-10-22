import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PoseListItem from '../PoseListItem/PoseListItem';

const poseList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.poses}
            renderItem={(info) => (
                <PoseListItem
                    poseName={info.item.poseName + " " + info.item.key} 
                    poseImage={info.item.poseImage}
                    onItemPressed={() => props.onItemPressed(info.item.key)} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
});

export default poseList;