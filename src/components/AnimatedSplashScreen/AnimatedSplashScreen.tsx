import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';

const AnimatedSplashScreen = ({onFinish}: {onFinish: () => void}) => {
  // Valores compartidos para la animación de los textos y la imagen
  const iconPosition = useSharedValue(0); // Animación del logo
  const textOpacity = useSharedValue(0); // Animación del texto superior e inferior

  useEffect(() => {
    // Oculta el splash screen nativo al cargar este componente
    SplashScreen.hide();

    // Inicia las animaciones en secuencia
    iconPosition.value = withTiming(
      1,
      {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      },
      () => {
        // Una vez que el logo termina la animación, animar el texto
        textOpacity.value = withTiming(
          1,
          {
            duration: 500,
            easing: Easing.in(Easing.ease),
          },
          () => {
            // Llama a la función onFinish para redirigir a la pantalla principal
            if (onFinish) {
              runOnJS(onFinish)(); // Utiliza runOnJS para invocar la función onFinish en el hilo de JS
            }
          },
        );
      },
    );
  }, []);

  // Define el estilo animado del logo
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: iconPosition.value * -50}, // Mueve el icono hacia arriba
        {scale: 1 + iconPosition.value * 0.2}, // Aumenta el tamaño
      ],
      opacity: 1 - iconPosition.value * 0.5, // Disminuye la opacidad
    };
  });

  // Estilo animado para el texto superior
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: textOpacity.value * -20}], // Mueve el texto hacia arriba
      opacity: textOpacity.value, // Controla la opacidad del texto
    };
  });

  // Estilo animado para el texto inferior
  const animatedTextStyleBottom = useAnimatedStyle(() => {
    return {
      transform: [{translateY: textOpacity.value * 20}], // Mueve el texto hacia abajo
      opacity: textOpacity.value, // Controla la opacidad del texto
    };
  });

  return (
    <View style={styles.container}>
      {/* Texto animado superior */}
      <Animated.Text style={[styles.topText, animatedTextStyle]}>
        Bartoncello Ricardo José
      </Animated.Text>

      {/* Logo animado */}
      <Animated.View style={[styles.iconContainer, animatedStyle]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.icon}
        />
      </Animated.View>

      {/* Texto animado inferior */}
      <Animated.Text style={[styles.bottomText, animatedTextStyleBottom]}>
        PPS - 2024 - 2
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF', // Cambia este color según tu diseño
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, // Espacio vertical para el logo
  },
  icon: {
    width: 150, // Tamaño del ícono
    height: 150,
  },
  topText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333', // Color del texto superior
    marginBottom: 50, // Espacio debajo del texto superior
  },
  bottomText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#555', // Color del texto inferior
    marginTop: 20, // Espacio arriba del texto inferior
  },
});

export default AnimatedSplashScreen;
