import React, { useRef, useEffect } from "react";
import { Text, Animated, View, Button } from "react-native";
import {useIsFocused} from "@react-navigation/native";

function animationExercise() {

    const moveArim = useRef(new Animated.Value(0)).current;
    const isFocused = useIsFocused();

    const startAnim = () => {
        Animated.timing(moveArim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
    };
    
    const changeArim = () => {
        Animated.timing(moveArim, {
            toValue: 50,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        startAnim();
        return () => moveArim.setValue(0);
    }, [moveArim, isFocused]);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Animated.View
            style={{
              width: 200,
              height: 100,
              borderRadius: 10,
              backgroundColor: "blue",
              opacity: moveArim,
              transform: [
                {
                  translateY: moveArim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [500, 0],
                  }),
                  rotate: moveArim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                  
                },
              ],
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                margin: 10,
                fontSize: 22,
              }}
            >
             Animation Exercise
            </Text>
          </Animated.View>
        </View>
      );
}

export default animationExercise;