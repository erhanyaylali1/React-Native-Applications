import React, { useContext, useState } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import LocationContext from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = ({ navigation }) => {

    const { data: { recording }, startRecording, stopRecording } = useContext(LocationContext)
    const [name, setName] = useState('')
    const [err, setErr] = useState('')
    const [saveTrack] = useSaveTrack()

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
        >
            {recording ? (
                <React.Fragment>
                    <Text style={styles.text}>Track is Recording...</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {
                                stopRecording()
                                setName('')
                            }}
                            title="Cancel"
                            type="clear"
                            buttonStyle={styles.buttons}
                        />
                        <Button
                            onPress={() => {
                                saveTrack(() => navigation.navigate('Tracks'))
                                setName('')
                            }}
                            title="Save"
                            buttonStyle={styles.buttons}
                        />
                    </View>
                </React.Fragment>
            ):(
                <React.Fragment>
                    <Input  
                        value={name}
                        onChangeText={(value) => {
                            setErr('')
                            setName(value)
                        }}
                        placeholder="Enter Track Name"
                    />
                    {err ? <Text style={styles.error}>{err}</Text>:null}
                    <Button
                        onPress={() => name ? startRecording(name):setErr('Enter a Name')}
                        title="Start Tracking"
                        type="clear"
                    />
                </React.Fragment>
            )}
            
        </KeyboardAvoidingView>
    )
}

export default TrackForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15
    },
    error: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttons: {
        paddingHorizontal: 30
    }
})
