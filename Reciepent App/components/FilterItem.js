import React from 'react'
import { StyleSheet, TouchableOpacity, Switch } from 'react-native'
import { Divider, Text } from 'react-native-elements'

const FilterItem = ({ val, onChange, title }) => {
    return (
        <React.Fragment>
            <TouchableOpacity 
                style={styles.row}
                activeOpacity={0.8}
                onPress={() => onChange(!val)}
            >
                <Text style={styles.text}>{ title }</Text>
                <Switch 
                    value={val}
                    onValueChange={(value) => onChange(value)}
                />
            </TouchableOpacity>
            {title !== 'Select Time Range' && (
                <Divider />
            )}
        </React.Fragment>
    )
}

export default FilterItem

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    text: {
        fontSize: 18,
    }
})
