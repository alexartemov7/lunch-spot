import { useState, createContext } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Stack } from "expo-router";

export const RestaurantContext = createContext(null)

export default function RootLayout() {
    const [thisRest, setThisRest] = useState()

    return (
    <GluestackUIProvider config={config}>
        <RestaurantContext.Provider value={{ thisRest, setThisRest}}>
            <Stack screenOptions={{ header: () => null }} />
        </RestaurantContext.Provider>
    </GluestackUIProvider>
    )
}