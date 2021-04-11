import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Card } from 'react-native-elements'

const MealItem = ({ item, navigation }) => {

    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.container}
            onPress={() => navigation.navigate('FoodDetail', {
                id: item.id,
                item,
            })}
        >
            <Card containerStyle={styles.card}>
                <Card.Image style={styles.image} source={{ uri: item.imageUrl }}>
                    <Card.Title style={styles.title}>
                        {item.title}
                    </Card.Title>
                </Card.Image>
                <View style={styles.textView}>
                        <Text style={styles.row}>
                            {item.duration} min
                        </Text>
                        <Text style={styles.row}>
                            {item.complexity}
                        </Text>
                        <Text style={styles.row}>
                            {item.affordability}
                        </Text>
                    </View>
            </Card>
        </TouchableOpacity>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 10,
        paddingHorizontal: 10
    },
    card: {
        padding: 0,
        borderRadius: 10,
        overflow: 'hidden',
        shadowRadius: 0,
        elevation: 0
    },
    image: {
        height: 200,
    },
    title: {
        paddingVertical: 7,
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    textView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginTop: 'auto',
    },
    row: {
        textTransform: 'capitalize',
        fontSize: 15,
        color: 'black',
        fontWeight: '700'
    }
})
