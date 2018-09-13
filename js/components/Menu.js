import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {
  changeSex,
  changeAge,
  changeFindSex,
  changeFindAge,
  startChat
} from '../redux/actions';
import {
  freeSpace,
  primaryColor,
  whiteColor,
  fontSize,
  greyColor
} from '../constants/theme';

class Menu extends Component {
  state = {};

  render() {
    /* eslint-disable no-shadow */
    const {
      menu: { sex, age, findSex, findAge },
      changeSex,
      changeAge,
      changeFindSex,
      changeFindAge,
      startChat
    } = this.props;
    /* eslint-enable */
    const findSexDisable = findSex === 'unknown';
    const findAgeDisable = findAge[0] === 'unknown';

    return (
      <View style={styles.main}>
        <View style={styles.menu}>
          {/* left column */}
          <View
            style={[
              styles.column,
              { borderRightColor: greyColor, borderRightWidth: 1 }
            ]}
          >
            {/* sex */}
            <View style={styles.item}>
              <Text
                style={{
                  fontSize: fontSize.base,
                  marginBottom: 8,
                  fontWeight: '700'
                }}
              >
                Кто ты?
              </Text>
              <TouchableOpacity
                onPress={() => changeSex('male')}
                disabled={findSexDisable}
                style={[
                  styles.itemButton,
                  !findSexDisable && sex === 'male'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findSexDisable ? { color: greyColor } : null}>
                  Парень
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeSex('female')}
                disabled={findSexDisable}
                style={[
                  styles.itemButton,
                  !findSexDisable && sex === 'female'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findSexDisable ? { color: greyColor } : null}>
                  Девушка
                </Text>
              </TouchableOpacity>
            </View>

            {/* age */}
            <View style={styles.item}>
              <Text
                style={{
                  fontSize: fontSize.base,
                  marginBottom: 8,
                  fontWeight: '700'
                }}
              >
                Сколько тебе лет?
              </Text>
              <TouchableOpacity
                onPress={() => changeAge('<18')}
                style={[
                  styles.itemButton,
                  !findAgeDisable && age === '<18'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findAgeDisable ? { color: greyColor } : null}>
                  Менее 18
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeAge('18-21')}
                style={[
                  styles.itemButton,
                  !findAgeDisable && age === '18-21'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findAgeDisable ? { color: greyColor } : null}>
                  От 18 до 21
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeAge('22-25')}
                style={[
                  styles.itemButton,
                  !findAgeDisable && age === '22-25'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findAgeDisable ? { color: greyColor } : null}>
                  От 22 до 25
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeAge('26-35')}
                style={[
                  styles.itemButton,
                  !findAgeDisable && age === '26-35'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findAgeDisable ? { color: greyColor } : null}>
                  От 26 до 35
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeAge('=>36')}
                style={[
                  styles.itemButton,
                  !findAgeDisable && age === '=>36'
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text style={findAgeDisable ? { color: greyColor } : null}>
                  36 и старше
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* right column */}
          <View style={styles.column}>
            {/* findSex */}
            <View style={styles.item}>
              <Text
                style={{
                  fontSize: fontSize.base,
                  marginBottom: 8,
                  fontWeight: '700'
                }}
              >
                Кого ищешь?
              </Text>
              <TouchableOpacity
                onPress={() => changeFindSex('male')}
                style={[
                  styles.itemButton,
                  styles.itemButtonDisabled,
                  findSex === 'male' ? styles.itemButtonSelected : null
                ]}
              >
                <Text>Парень</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindSex('female')}
                style={[
                  styles.itemButton,
                  findSex === 'female' ? styles.itemButtonSelected : null
                ]}
              >
                <Text>Девушка</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindSex('unknown')}
                style={[
                  styles.itemButton,
                  findSex === 'unknown' ? styles.itemButtonSelected : null
                ]}
              >
                <Text>Без разницы</Text>
              </TouchableOpacity>
            </View>

            {/* findAge */}
            <View style={styles.item}>
              <Text
                style={{
                  fontSize: fontSize.base,
                  marginBottom: 8,
                  fontWeight: '700'
                }}
              >
                Сколько тебе лет?
              </Text>
              <TouchableOpacity
                onPress={() => changeFindAge('<18')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('<18') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>Менее 18</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindAge('18-21')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('18-21') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>От 18 до 21</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindAge('22-25')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('22-25') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>От 22 до 25</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindAge('26-35')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('26-35') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>От 26 до 35</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindAge('=>36')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('=>36') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>36 и старше</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeFindAge('unknown')}
                style={[
                  styles.itemButton,
                  findAge.indexOf('unknown') !== -1
                    ? styles.itemButtonSelected
                    : null
                ]}
              >
                <Text>Без разницы</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => startChat()}
            style={styles.touchable}
          >
            <Text style={{ color: whiteColor, fontSize: fontSize.md }}>
              Найти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const buttonHeight = 68;
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: '100%'
    // position: 'absolute'
  },
  menu: {
    width: '100%',
    backgroundColor: whiteColor,
    minHeight: 200,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    padding: freeSpace,
    paddingBottom: buttonHeight / 2 + freeSpace
  },
  item: {
    flex: 1,
    width: '100%',
    marginBottom: freeSpace
  },
  itemButton: {
    borderColor: greyColor,
    borderWidth: 1,
    paddingTop: freeSpace / 2,
    paddingBottom: freeSpace / 2,
    paddingLeft: freeSpace,
    paddingRight: freeSpace,
    marginBottom: 3,
    backgroundColor: '#fcfcfc'
  },
  itemButtonSelected: {
    borderColor: primaryColor,
    backgroundColor: '#c6efff'
  },
  itemButtonDisabled: {
    borderColor: greyColor,
    backgroundColor: '#fcfcfc'
  },
  button: {
    backgroundColor: primaryColor,
    height: buttonHeight,

    top: -(buttonHeight / 2),
    elevation: 2
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingRight: freeSpace * 3,
    paddingLeft: freeSpace * 3
  }
});

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = {
  changeSex,
  changeAge,
  changeFindSex,
  changeFindAge,
  startChat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
