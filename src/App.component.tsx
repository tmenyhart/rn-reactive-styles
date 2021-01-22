import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const Styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const App = React.memo(() => {
  return (
    <SafeAreaView>
      <View style={Styles.root} />
    </SafeAreaView>
  );
});
