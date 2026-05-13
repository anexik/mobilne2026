import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProductListScreen from './src/screens/ProductListScreen';

type Screen = 'home' | 'details' | 'coffeeList' | 'teaList';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>('home');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />

      {currentScreen === 'home' && (
        <HomeScreen
          onOpenDetails={() => setCurrentScreen('details')}
          onOpenCoffeeList={() => setCurrentScreen('coffeeList')}
          onOpenTeaList={() => setCurrentScreen('teaList')}
        />
      )}

      {currentScreen === 'coffeeList' && (
        <ProductListScreen
          title="Kawy"
          onBack={() => setCurrentScreen('home')}
          onOpenDetails={() => setCurrentScreen('details')}
        />
      )}

      {currentScreen === 'teaList' && (
        <ProductListScreen
          title="Herbaty"
          onBack={() => setCurrentScreen('home')}
          onOpenDetails={() => setCurrentScreen('details')}
        />
      )}

      {currentScreen === 'details' && (
        <DetailsScreen onBack={() => setCurrentScreen('home')} />
      )}
    </SafeAreaProvider>
  );
}

export default App;