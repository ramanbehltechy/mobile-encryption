import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sodium from 'react-native-sodium';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cipher: 'data',
      message: 'data',
    }
    this.processEncryption = this.processEncryption.bind(this);
  }

  componentDidMount() {

    this.processEncryption();

  }

  async processEncryption() {
    try {
      const publicKey = "/AllqhynaA/pvvdMhoILo2YNxQ1MnxtQlOKTR1jZV0I=";
      const encryptionKeyPair = await Sodium.crypto_box_keypair();
      const nonce = await Sodium.randombytes_buf(Sodium.crypto_box_NONCEBYTES);
      const encryptedMessage = await Sodium.crypto_box_easy("Hello World", nonce, publicKey, encryptionKeyPair.sk);

      // console.log(`encryptionKeyPair is ${JSON.stringify(encryptionKeyPair)}`);
      // console.log(`nonce is ${JSON.stringify(nonce)}`);
      // console.log(`encrypted message is ${JSON.stringify(encryptedMessage)}`);

      let decryptedMessage = await Sodium.crypto_box_open_easy(encryptedMessage, nonce, publicKey, encryptionKeyPair.sk);

      this.setState({
        cipher: encryptedMessage,
        message: decryptedMessage,
      });
    } catch (error) {
      console.log(JSON.stringify(error));
    }

  }

  render() {
    const { message, cipher } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{cipher}</Text>
        <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});