import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const goalItem = props => {
    return (
        <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    listItem: {
        marginVertical: 9,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }

});

export default goalItem;