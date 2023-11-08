import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {

    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
            .then(res => res.json())
            .then(data => setRestaurants(data))
            .catch(alert)
    }, [])

    return (
        <View>
            <ScrollView>
                {restaurants && restaurants.map(rest => (
                    <RestaurantCard key={rest._id} restaurant={rest} />
                ))}
            </ScrollView>
        </View>
    )
}