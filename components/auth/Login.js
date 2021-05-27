import React, { Component } from 'react'
import { View, TextInput } from 'react-native'


export class Login extends Component {
    render() {
        return (
            <View>

                <TextInput
                    placeholder='enter email'
                    onChangeText={(email) => this.setState({ email })}


                />

                <TextInput
                    placeholder='enter passwordl'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}


                />
                <Button title='Sign In' />

            </View>
        )
    }
}



export default Login
