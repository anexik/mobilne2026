import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import COLORS from '../styles/colors';

type DetailsScreenProps = {
  onBack: () => void;
};

const DetailsScreen = ({ onBack }: DetailsScreenProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.screen}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.8}>
            <Text style={styles.backButtonText}>← Wróć</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/images/coffee.png')}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={styles.title}>Kawa Arabica</Text>
          <Text style={styles.price}>25,00 zł / 100 g</Text>

          <Text style={styles.description}>
            Aromatyczna kawa o delikatnym smaku i przyjemnym zapachu.
            Idealna do codziennego picia.
          </Text>

          <TouchableOpacity style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Dodaj do koszyka</Text>
          </TouchableOpacity>
        </ScrollView>

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
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.active,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.active,
    marginBottom: 18,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textMuted,
    marginBottom: 28,
  },
  button: {
    backgroundColor: COLORS.active,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default DetailsScreen;