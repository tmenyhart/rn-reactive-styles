import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { Theme, useThemeAwareObject } from '../theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    iosStatusBar: {
      height: DeviceInfo.hasNotch() ? 44 : 20,
      backgroundColor: theme.color.primary,
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: theme.spacing.base,
      width: '100%',
    },
    text: {
      color: theme.color.onPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  return styles;
};

const createStyleVariables = (theme: Theme) => {
  const styleVariables = {
    statusBarColor: theme.color.primaryDark,
  };
  return styleVariables;
};

export interface ToolbarProps {
  title: string;
}

export const Toolbar = React.memo<ToolbarProps>((props) => {
  const Styles = useThemeAwareObject(createStyles);
  const StyleVariables = useThemeAwareObject(createStyleVariables);

  const IosStatusBarElementOrNull = React.useMemo(() => {
    if (Platform.OS !== 'ios') {
      return null;
    }

    return <View style={Styles.iosStatusBar} />;
  }, [Styles]);

  return (
    <View>
      {IosStatusBarElementOrNull}
      <View style={Styles.container}>
        <StatusBar backgroundColor={StyleVariables.statusBarColor} barStyle={'light-content'} />
        <Text style={Styles.text}>{props.title}</Text>
      </View>
    </View>
  );
});
