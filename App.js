import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      cities: [
        { name: "New York", temp: 80, key: 'ny' },
        { name: "Chicago", temp: 74, key: 'chi' },
        { name: "Los Angeles", temp: 72, key: 'la' },
        { name: "Miami", temp: 93, key: 'mia' },
        { name: "Anchorage", temp: 45, key: 'anc'}
      ]
    };
  }

  updateWeather = () => {
    let updatedCities = [];
    for (let c of this.state.cities) {
      c.temp = Math.round(Math.random() * 100);
      updatedCities.push(c);
    }
    this.setState({
      cities: updatedCities
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Totally Accurate Weather</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.cities}
            renderItem={({item}) => 
              <View style={styles.cwItem}>
                <Text style={styles.cwItemText}>{item.name}</Text>
                <Text style={styles.cwItemText}>{item.temp}</Text>
              </View>
            }
            />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.refresh}
            onPress={this.updateWeather}>
            <Text>
              Check Weather
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 0.2,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    alignSelf: 'center'
  },
  cwItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
    padding: 10,
  },
  cwItemText: {
    fontSize: 24,
  },
  footer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  },
  refresh: {
    height: 70,
    width: 130,
    backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
