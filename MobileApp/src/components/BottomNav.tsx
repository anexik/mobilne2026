import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import COLORS from '../styles/colors';

const IconHome = ({ color }: { color: string }) => (
  <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
    <Path d="M3 12L12 3l9 9" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M9 21V12h6v9M5 10v11h14V10" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const IconSearch = ({ color }: { color: string }) => (
  <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
    <Circle cx={11} cy={11} r={8} stroke={color} strokeWidth={2} />
    <Path d="M21 21l-4.35-4.35" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const IconCart = ({ color }: { color: string }) => (
  <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
    <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M3 6h18M16 10a4 4 0 01-8 0" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const IconPerson = ({ color }: { color: string }) => (
  <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
    <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={12} cy={7} r={4} stroke={color} strokeWidth={2} />
  </Svg>
);

const NAV_ITEMS = [
  { icon: IconHome, label: 'Start' },
  { icon: IconSearch, label: 'Szukaj' },
  { icon: IconCart, label: 'Koszyk' },
  { icon: IconPerson, label: 'Profil' },
];

type BottomNavProps = {
  activeTab: number;
  onChangeTab: (index: number) => void;
};

const BottomNav = ({ activeTab, onChangeTab }: BottomNavProps) => {
  return (
    <View style={styles.bottomNav}>
      {NAV_ITEMS.map((item, index) => {
        const { icon: IconComponent, label } = item;
        const color = activeTab === index ? COLORS.active : COLORS.inactive;

        return (
          <TouchableOpacity
            key={label}
            style={styles.navItem}
            onPress={() => onChangeTab(index)}
            activeOpacity={0.7}
          >
            <IconComponent color={color} />
            <Text style={[styles.navLabel, { color }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    height: 70,
    backgroundColor: COLORS.white,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
});

export default BottomNav;