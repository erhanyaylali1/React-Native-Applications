import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Text, Divider  } from 'react-native-elements'
import FilterItem from '../components/FilterItem'
import { useSelector } from 'react-redux'
import { getFoods } from '../redux/foodsSlice'
import { PickerView } from '@ant-design/react-native'


const FiltersScreen = ({ navigation }) => {   

    const [gluten, setGluten] = useState(false)
    const [lactose, setLactose] = useState(false)
    const [vegan, setVegan] = useState(false)
    const [vegeterian, setVegeterian] = useState(false)
    const [timeRange, setTimeRange] = useState(false)
    const [number, setNumber] = useState([0, 30])

    const durations = [[],[]]
    for (let index = 0; index < 17; index++) {
        durations[0].push({ label: `${index * 15} min`, value: index * 15})
        durations[1].push({ label: `${index * 15} min`, value: index * 15})
    }

    const filters = { gluten, lactose, vegan, vegeterian, timeRange, number }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avaible Filters</Text>
            <View style={{ marginBottom: 25 }}/>
            <FilterItem 
                val={gluten}
                onChange={setGluten}
                title="Gluten-Free"
            />
            <FilterItem 
                val={lactose}
                onChange={setLactose}
                title="Lactose-Free"
            />
            <FilterItem 
                val={vegan}
                onChange={setVegan}
                title="Vegan"
            />
            <FilterItem 
                val={vegeterian}
                onChange={setVegeterian}
                title="Vegeterian"
            />
            <FilterItem 
                val={timeRange}
                onChange={setTimeRange}
                title="Select Time Range"
            />
            {timeRange && (
                <React.Fragment>
                    <View style={styles.picker}>
                        <PickerView
                            onChange={(value) => setNumber(value)}
                            value={number}
                            data={durations}
                            cascade={false}
                            itemStyle={styles.pickerItem}
                        />
                    </View>
                </React.Fragment>
            )}
            <Divider style={{ marginTop: timeRange ? 15:0 }}/>
            <View style={styles.button}>
                <Button
                    title="Apply"
                    onPress={() => {
                        navigation.navigate('List', {
                            type: 'Filter',
                            filters
                        })
                    }}
                />
            </View>
        </View>
    )
}

export default FiltersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 30
    },
    title: {
        fontSize: 22,
        textAlign: 'left'
    },
    picker: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        overflow: 'hidden'
    },
    pickerItem: {
        marginVertical: 7
    },
    button: {
        marginTop: 25,
    }
})

