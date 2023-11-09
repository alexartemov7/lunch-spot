import { useState, useEffect, useContext } from "react";
import { router } from "expo-router";
import { View, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../app/_layout";
import { Fab, FabLabel } from "@gluestack-ui/themed";

export default function RestaurantList() {

    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data))
            .catch(alert)
    }, [])

    const { setThisRest } = useContext (RestaurantContext)

    const chooseRandom = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length)
        setThisRest(restaurants[randomIndex])
        router.push("/details")
        
    }

    return (
        <View>
            <ScrollView>
                {restaurants && restaurants.map(rest => (
                    <RestaurantCard key={rest._id} restaurant={rest} />
                ))}
            </ScrollView>
            <Fab 
                onPress={chooseRandom}
                size="lg"
                bgColor="$blue700">
                <FabLabel size="lg">🎲</FabLabel>
            </Fab>
        </View>
    )
}