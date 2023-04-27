import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CategoryPage = () => {
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // handle form submission here
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Categories</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Category 1" value="Category 1" />
          <Picker.Item label="Category 2" value="Category 2" />
          <Picker.Item label="Category 3" value="Category 3" />
          <Picker.Item label="Category 4" value="Category 4" />
          <Picker.Item label="Category 5" value="Category 5" />
        </Picker>
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  field: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default CategoryPage;