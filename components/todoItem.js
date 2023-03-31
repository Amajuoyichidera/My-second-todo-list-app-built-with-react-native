import { StyleSheet, Text, View, Button, TextInput,
   ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem ({ item, pressed }) {

    return (
        <TouchableOpacity onPress={() => pressed(item.key)}>
        <View style={styles.item}>
          <MaterialIcons name='delete' size={20} color='red' />
         <Text style={styles.itemtext}>{item.text}</Text>
        </View>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemtext: {
       marginLeft: 30,
    }
});