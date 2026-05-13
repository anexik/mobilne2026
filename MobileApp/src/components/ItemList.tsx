import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../styles/colors';

export interface Item {
  id: string;
  name: string;
  price: string;
  image: any;
}

type ItemListProps = {
  items: Item[];
  onSelectItem?: (item: Item) => void;
};

const ItemList: React.FC<ItemListProps> = ({ items, onSelectItem }) => {
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.85}
      onPress={() => onSelectItem?.(item)}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />

      <View style={styles.itemContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
    marginRight: 14,
  },
  itemContent: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    color: COLORS.active,
    fontWeight: '600',
  },
  separator: {
    height: 12,
  },
});

export default ItemList;