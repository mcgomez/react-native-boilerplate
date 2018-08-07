import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../themes'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.red,
    borderBottomColor: Colors.orange,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.yellow,
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
  },
})
