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

  async function handleBarCodeScanned({ type, data }){
    setScanned(true);

    if(props.type == "Check-in"){
      try {
        const res = await hotelServices.CheckIn({token: data})
        alert(`Número do quarto: ${JSON.stringify(res)}`)
      } catch (error) {
        alert(error)
      }
    }else if (props.type == "Check-out"){
      try {
        const res = await hotelServices.CheckOut({token: data})
        alert("Check-out Concluído....")
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
    width: '50%',
    fontSize: 30,
    color: '#FAF7F2',
    padding: 5,
    backgroundColor: 'rgba(50, 52, 52, 0.7)',
    borderRadius: 10
  }
})
