import { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'

import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) {
        return null
    }

    return (
        <View onLayout={onLayoutRootView}>
            <Slot></Slot>
        </View>
    )
}
