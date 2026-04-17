import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import ItemList, { Item } from '../components/ItemList';
import COLORS from '../styles/colors';

type ProductListScreenProps = {
  title: string;
  onBack: () => void;
  onOpenDetails: () => void;
};

const ProductListScreen = ({
  title,
  onBack,
  onOpenDetails,
}: ProductListScreenProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const items: Item[] =
    title === 'Kawy'
      ? [
          {
            id: '1',
            name: 'Kawa Arabica',
            price: '25,00 zł / 100 g',
            image: require('../assets/images/coffee.png'),
          },
          {
            id: '2',
            name: 'Espresso Blend',
            price: '28,00 zł / 100 g',
            image: require('../assets/images/coffee.png'),
          },
          {
            id: '3',
            name: 'Kawa Colombia',
            price: '30,00 zł / 100 g',
            image: require('../assets/images/coffee.png'),
          },
        ]
      : [
          {
            id: '4',
            name: 'Herbata Zielona',
            price: '18,00 zł / 100 g',
            image: require('../assets/images/tea.png'),
          },
          {
            id: '5',
            name: 'Herbata Czarna',
            price: '20,00 zł / 100 g',
            image: require('../assets/images/tea.png'),
          },
          {
            id: '6',
            name: 'Herbata Owocowa',
            price: '19,00 zł / 100 g',
            image: require('../assets/images/tea.png'),
          },
        ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.screen}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.8}>
            <Text style={styles.backButtonText}>← Wróć</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Wybierz produkt z listy</Text>

          <ItemList items={items} onSelectItem={onOpenDetails} />
        </View>

        <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.active,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textMuted,
    marginBottom: 20,
  },
});

export default ProductListScreen;