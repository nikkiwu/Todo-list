import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from 'react-native';


const goalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttonInput}>
                    <Button title='Cancel' color='red' onPress={props.onCancel}/>
                    <Button title="Add" onPress={addGoalHandler}/>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        marginBottom: 10,
        width: '75%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonInput: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default goalInput;
