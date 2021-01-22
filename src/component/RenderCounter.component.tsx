import React from 'react';
import { Animated, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { Theme, useThemeAwareObject } from '../theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
    },
    infoText: {
      color: theme.color.onSurface,
      fontSize: 14,
    },
    infoTextBold: {
      fontWeight: 'bold',
    },
  });

  return styles;
};

export const RenderCounter = React.memo(() => {
  const Styles = useThemeAwareObject(createStyles);

  const numberOfRendersRef = React.useRef<number>(1);

  const opacityAnimatedValueRef = React.useRef<Animated.Value>(new Animated.Value(0));

  React.useEffect(() => {
    numberOfRendersRef.current += 1;
  });

  React.useEffect(() => {
    const fadeOutAnimation = Animated.timing(opacityAnimatedValueRef.current, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    });

    const fadeInAnimation = Animated.timing(opacityAnimatedValueRef.current, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    });

    const sequenceAnimations = Animated.sequence([fadeOutAnimation, fadeInAnimation]);

    sequenceAnimations.start();

    return () => {
      sequenceAnimations.stop();
    };
  });

  const RootStyles = React.useMemo(() => {
    const rootStyles = [Styles.root, { opacity: opacityAnimatedValueRef.current }];

    return rootStyles;
  }, [Styles]);

  const InfoTextBoldStyles = React.useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [Styles.infoText, Styles.infoTextBold];

    return infoTextBoldStyles;
  }, [Styles]);

  return (
    <Animated.View style={RootStyles}>
      <Text style={Styles.infoText}>{'Number of renders: '}</Text>
      <Text style={InfoTextBoldStyles}>{numberOfRendersRef.current}</Text>
    </Animated.View>
  );
});
