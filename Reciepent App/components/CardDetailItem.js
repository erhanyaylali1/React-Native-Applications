import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const CardDetailItem = ({ data, title, icon }) => {
    const RenderItems = ({ item, index }) => {
        switch(title) {
            case 'Features':
                return (
                    <View style={styles.featuresItems}>
                            {item.icon}
                            <Text style={styles.featuresProperty}>{ item.title }: </Text>
                            <Text style={styles.featuresValue}>{ item.data }</Text>
                        </View>
                )
            case 'Diet Type':
                return (
                    <View style={styles.dietItems}>
                        {item.icon}
                        <Text style={styles.dietValue}>
                            {item.title}
                        </Text>
                    </View>
                )
            case 'Ingredients':
                return (
                    <View style={styles.ingredientsItem}>
                        <Text style={styles.ingredientValue}>
                            - {item}
                        </Text>
                    </View>
                )
            case 'Steps': 
                return (
                    <View style={styles.ingredientsItem}>
                        <Text style={styles.ingredientValue}>
                            {index+1} - {item}
                        </Text>
                    </View>
                )
            default:
                return null
        }
    }

    return (
        <View style={styles.outCard}>
            <View style={styles.innerCard}>
                <View style={styles.stepContainer}>
                    {icon}
                    <Text style={styles.steps}>{ title }</Text>
                </View>
                <FlatList 
                    data={data}
                    style={styles.list}
                    numColumns={title === "Diet Type" ? 2:1}
                    keyExtractor={(item) => item.title ? item.title:item}
                    renderItem={RenderItems}
                />
            </View>
        </View>
    )
}

export default CardDetailItem

const styles = StyleSheet.create({
    outCard: {
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    innerCard: {
        backgroundColor: 'white', 
        paddingTop: 20, 
        paddingBottom: 15, 
        borderRadius: 20,
        elevation: 5,
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    stepContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingLeft: 35,
        marginBottom: 20
    },
    steps: {
        marginLeft: 15,
        fontSize: 22
    },
    featuresItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        marginBottom: 10,
        marginTop: 5
    },
    featuresProperty: {
        marginLeft: 15,
        fontSize: 18,
    },
    featuresValue: {
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: 'bold'
    },
    dietItems: {
        marginLeft: 15,
        marginBottom: 10,
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 20,
    },
    dietValue: {
        fontSize: 15,
        marginLeft: 5
    },
    ingredientsItem: {
        marginLeft: 15,
        marginBottom: 10
    },
    ingredientValue: {
        fontSize: 18
    },
})
