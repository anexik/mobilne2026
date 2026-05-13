import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import COLORS from '../styles/colors';

type HomeScreenProps = {
  onOpenCoffeeList: () => void;
  onOpenTeaList: () => void;
  onOpenDetails: () => void;
};

const HomeScreen = ({ onOpenCoffeeList, onOpenTeaList, onOpenDetails }: HomeScreenProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>CoffeeSpot</Text>
        <Text style={styles.subtitle}>Odkryj swój ulubiony smak</Text>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onOpenDetails}>
          <Image source={require('../assets/images/nowosci.png')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardText}>Nowości</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onOpenCoffeeList}>
          <Image source={require('../assets/images/coffee.png')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardText}>Kawy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onOpenTeaList}>
          <Image source={require('../assets/images/tea.png')} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.cardText}>Herbaty</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 16,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textMuted,
    marginBottom: 28,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardText: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
});

export default HomeScreen;