import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../themes'

export default StyleSheet.create({
  fullButton__button: {
    backgroundColor: Colors.yellow,
    borderBottomColor: Colors.orange,
    borderBottomWidth: 1,
    borderTopColor: Colors.red,
    borderTopWidth: 1,
    marginVertical: 5,
  },
  fullButton__text: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    margin: 18,
    textAlign: 'center',
  },
})
