import React,{useState} from 'react'
import { View, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const AddComment = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <View>
            <Text>Add comment</Text>
            <DropDownPicker
                searchable={false}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    )
}

export default AddComment
