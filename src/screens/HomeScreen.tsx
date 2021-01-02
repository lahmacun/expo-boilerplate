import React from 'react';
import {Button, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {decreaseCounter, increaseCounter} from "../redux/actions/CounterActions";
import {connect} from "react-redux";

function HomeScreen(props) {
    const {counter, increaseCounter, decreaseCounter} = props;

    return (
        <View style={styles.container}>
            <Text>Welcome To React Native Boilerplate.</Text>
            <View style={{height: 20,}} />
            <Text>This is your counter value: {counter.count}</Text>
            <View style={{height: 20,}} />
            <Button title={"Increase Counter"} onPress={increaseCounter} />
            <View style={{height: 20,}} />
            <Button title={"Decrease Counter"} onPress={decreaseCounter} />
            <View style={{height: 20,}} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>
                    Made with ❤️ by&nbsp;
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('https://github.com/lahmacun/expo-boilerplate');
                    }}
                >
                    <Text>@lahmacun</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.CounterReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: payload => dispatch(increaseCounter(payload)),
        decreaseCounter: payload => dispatch(decreaseCounter(payload)),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
