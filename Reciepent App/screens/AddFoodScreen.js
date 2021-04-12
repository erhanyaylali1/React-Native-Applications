import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Button as Btn, Text } from 'react-native-elements'
import { Button, InputItem, List, Picker, Provider, Switch } from '@ant-design/react-native'
import { Feather } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../redux/categorySlice'
import { getFoods, addFood } from '../redux/foodsSlice'
import Meal from '../models/meal'


const AddFoodScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const foods = useSelector(getFoods)
    const [name, setName] = useState('')
    const [nameEntered, setNameEntered] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [imageEntered, setImageEntered] = useState(false)
    const [foodCategory, setFoodCategory] = useState(['0'])
    const [valueAffordability, setValueAffordability] = useState(' ')
    const [affordabilityEntered, setAffordabilityEntered] = useState(false)
    const [valueComplexity, setValueComplexity] = useState(' ')
    const [complexityEntered, setComplexityEntered] = useState(false)
    const [duration, setDuration] = useState('')
    const [durationEntered, setDurationEntered] = useState(false)
    const [isLactose, setIsLactose] = useState(false)
    const [isGluten, setIsGluten] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegaterian, setIsVegaterian] = useState(false)
    const [ingredients, setIngredients] = useState([''])
    const [ingredientEntered, setIngredientEntered] = useState(false)
    const [steps, setSteps] = useState([''])
    const [stepEntered, setStepEntered] = useState(false)

    const categories = useSelector(getCategories).map((item) => ({ value: item.id, label: item.title }))
    const affordability = [
        { label: 'Affordable', value: 'Affordable'},
        { label: 'Pricey', value: 'Pricey'},
        { label: 'Cheap', value: 'Cheap'},
        { label: 'Luxurious', value: 'Luxurious'}
    ]
    const complexity = [
        { label: 'Simple', value: 'Simple' },
        { label: 'Challenging', value: 'Challenging' },
        { label: 'Hard', value: 'Hard' },
    ]

    const deleteElementFromArray = (index, oldArr) => {
        const newArr = []
        oldArr.forEach((item, index2) => {
            if(index !== index2)
                newArr.push(item)
        })
        return newArr
    }

    const RenderErrorText = () => {
        if(name === '' && nameEntered) return 'Please Enter a Valid Name!'
        if(imageUrl === '' && imageEntered) return 'Please Enter a Valid Name!'
        if(valueAffordability === ' ' && affordabilityEntered) return 'Please Select Affordability!'
        if(valueComplexity === ' ' && complexityEntered) return 'Please Select Complexity!'
        if(duration === '' && durationEntered) return 'Please Enter a Duration!'
        if(ingredients[0] === '' && ingredientEntered) return 'Please Enter Ingreditens'
        if(steps[0] === '' && stepEntered) return 'Please Enter Steps'
        return ''
    }
    
    const createFood = () => {

        const newMeal = new Meal(
            (foods.length + 1).toString(),
            foodCategory,
            name,
            valueAffordability,
            valueComplexity,
            imageUrl,
            duration,
            ingredients,
            steps,
            isGluten,
            isVegan,
            isVegaterian,
            isLactose
        )
        console.log(newMeal)
        dispatch(addFood(newMeal))
        navigation.navigate('Categories')
    }

    console.log(foodCategory[0])
    return (
        <Provider>
            <ScrollView>
                <List renderHeader={'Food Detail'}>
                    <InputItem
                        value={name}
                        onChangeText={(value) => setName(value)}
                        textAlign="right"
                        placeholder="e.g. Grilled Burger"
                        last
                        onFocus={() => setNameEntered(true)}
                    >
                        Name
                    </InputItem>
                    <InputItem
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        textAlign="right"
                        placeholder="e.g. http://www..."
                        onFocus={() => setImageEntered(true)}
                        last
                    >
                        Image
                    </InputItem>
                    <Picker
                        data={categories}
                        extra={categories[(foodCategory[0] - 1)].label}
                        cols={1}
                        onChange={(value) => setFoodCategory(value[0])}
                        okText="Okay"
                        dismissText="Cancel"
                        itemStyle={styles.picker}
                    >
                        <List.Item arrow="horizontal">
                            Select Category
                        </List.Item>
                    </Picker>
                </List>
                <List renderHeader={'Food Features'}>
                    <Picker
                        data={affordability}
                        extra={valueAffordability}
                        cols={1}
                        onVisibleChange={() => {if(!affordabilityEntered) setAffordabilityEntered(true)}}

                        onChange={(value) => setValueAffordability(value[0])}
                        okText="Okay"
                        dismissText="Cancel"
                        itemStyle={styles.picker}
                    >
                        <List.Item arrow="horizontal">
                            Select Affordability
                        </List.Item>
                    </Picker>
                    <Picker
                        data={complexity}
                        extra={valueComplexity}
                        cols={1}
                        onChange={(value) => setValueComplexity(value[0])}                        
                        onVisibleChange={() => {if(!complexityEntered) setComplexityEntered(true)}}
                        okText="Okay"
                        dismissText="Cancel"
                        itemStyle={styles.picker}
                    >
                        <List.Item arrow="horizontal">
                            Select Complexity
                        </List.Item>
                    </Picker>
                    <InputItem
                        type="number"
                        value={duration}
                        onChangeText={(value) => setDuration(value)}
                        placeholder="e.g. 40 min"
                        textAlign="right"
                        onFocus={() => setDurationEntered(true)}
                        last
                    >
                        Duration
                    </InputItem>
                </List>
                <List renderHeader={'Diet Detail'}>
                    <List.Item
                        extra={
                            <Switch
                                checked={isLactose}
                                onChange={(value) => setIsLactose(value)}
                            />
                        }
                    >
                        Lactose-Free
                    </List.Item>
                    <List.Item
                        extra={
                            <Switch
                                checked={isGluten}
                                onChange={(value) => setIsGluten(value)}
                            />
                        }
                    >
                        Gluten-Free
                    </List.Item>
                    <List.Item
                        extra={
                            <Switch
                                checked={isVegan}
                                onChange={(value) => setIsVegan(value)}
                            />
                        }
                    >
                        Vegan
                    </List.Item>
                    <List.Item
                        extra={
                            <Switch
                                checked={isVegaterian}
                                onChange={(value) => setIsVegaterian(value)}
                            />
                        }
                    >
                        Lactose-Free
                    </List.Item>
                </List>
                <List 
                    renderHeader={'Ingredients'}
                >
                    {ingredients.map((item, index) => (
                        <InputItem
                            key={index}
                            value={ingredients[index]}
                            onFocus={() => setIngredientEntered(true)}
                            onChangeText={(value) => setIngredients(ingredients.map((item, index2) => {
                                    if(index === index2) return value
                                    else return item
                            }))}
                            extra={
                                <Feather 
                                    name="delete" 
                                    size={24} 
                                    color="black" 
                                    onPress={() => setIngredients(deleteElementFromArray(index, ingredients))}
                                />
                            }
                        >
                            {'# ' + (index + 1).toString()}
                        </InputItem>
                    ))}
                </List>
                <Btn 
                    type="clear"
                    title="Add New Ingredients"
                    style={styles.addButton}
                    icon={{
                        name: "add",
                        size: 24,
                        color: "#2288DC"
                    }}
                    onPress={() => setIngredients([...ingredients, ''])}
                />
                <List 
                    renderHeader={'Steps'}
                >
                    {steps.map((item, index) => (
                        <InputItem
                            key={index}
                            onFocus={() => console.log('GİRİLDİ')}
                            value={steps[index]}
                            onFocus={() => setStepEntered(true)}                            
                            onChangeText={(value) => setSteps(steps.map((item, index2) => {
                                    if(index === index2) return value
                                    else return item
                            }))}
                            extra={
                                <Feather 
                                    name="delete" 
                                    size={24} 
                                    color="black" 
                                    onPress={() => setSteps(deleteElementFromArray(index, steps))}
                                />
                            }
                        >
                            {'# ' + (index + 1).toString()}
                        </InputItem>
                    ))}
                </List>
                <Btn 
                    type="clear"
                    title="Add New Step"
                    style={styles.addButton}
                    icon={{
                        name: "add",
                        size: 24,
                        color: "#2288DC"
                    }}
                    onPress={() => setSteps([...steps, ''])}
                />
                <Button
                    style={styles.button}
                    type="primary" 
                    disabled={RenderErrorText().length}      
                    onPress={() => createFood()}    
                >
                    Submit
                </Button>
                <View style={styles.errorView}>
                    <Text style={styles.error}>{RenderErrorText()}</Text>
                </View>
            </ScrollView>
        </Provider>
    )
}

export default AddFoodScreen

const styles = StyleSheet.create({
    picker: {
        paddingVertical: 7,
        fontSize: 20
    },
    button: {
        marginTop: 30,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    addButton: {
        marginVertical: 20
    },
    errorView: {
        marginVertical: 10
    },
    error: {
        fontSize: 16,
        color :'red',
        textAlign: 'center'
    }
})
