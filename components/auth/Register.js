import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export class Register extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder='enter name'
                    onChangeText={(name) => this.setState({ name })}


                />

                <TextInput
                    placeholder='enter email'
                    onChangeText={(email) => this.setState({ email })}


                />

                <TextInput
                    placeholder='enter passwordl'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}


                />
                <Button title='SignUp' />

            </View>
        )
    }
}

export default Register
