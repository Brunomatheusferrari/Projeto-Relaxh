import React, { useState, useEffect } from 'react';
import { Dimensions,Image ,Text,StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import hotelServices from '../../services/hotelServices';

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    if(props.type == "Checkin"){
      try {
        const res = hotelServices.CheckIn({token: data})
        alert(res)
      } catch (error) {
        alert(error)
      }
    }else if (props.type == "Checkout"){
      try {
        const res = hotelServices.CheckOut({token: data})
        alert(res)
      } catch (error) {
        alert(error)
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <BarCodeScanner style={[StyleSheet.absoluteFill, styles.container]} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <Text style={styles.description}>{props.type}</Text>
        <Image
            style={styles.qr}
            source={require('../../assets/Qr.png')}
          />
          {props.children}
      </BarCodeScanner>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    marginTop: '10%',
    textAlign: 'center',
    width: '80%',
    fontSize: 50,
    color: '#FAF7F2',
  }
})
