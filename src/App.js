import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/41714061?s=96&v=4';
const urlMyProfileMyGithub = 'https://github.com/pabloerlis';

const quadradinho = () => {
  return <View style={[style.quadradinho, style.backgroundVerde]} />;
};

function quadradinhos(qtd = 1) {
  let listaDeQuadradinhos = [];
  while (qtd > 0) {
    listaDeQuadradinhos.push(quadradinho());
    qtd--;
  }
  return listaDeQuadradinhos;
}
const App = () => {
  const handlePressGoToMyProfileGithub = async () => {
    console.log('Verificando link...');
    const response = await Linking.canOpenURL(urlMyProfileMyGithub);
    if (response) {
      console.log('Link aprovado');
      console.log('Abrindo o link...');
      await Linking.openURL(urlMyProfileMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Pablo na cozinha em frente a porta"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Pablo Erlis"
          style={[style.defaultText, style.name]}>
          Pablo Erlis
        </Text>
        <Text
          accessibilityLabel="NickName: pabloerlis"
          style={[style.defaultText, style.nickname]}>
          pabloerlis
        </Text>
        <Text
          accessibilityLabel="Biografia: Estudante, Amante da tecnologia. dot Net, C Sharp, React Native, React JS, JavaScript, Node JS, CSS, HTML, Python"
          style={[style.defaultText, style.biografia]}>
          Estudante/Amante da tecnologia .Net | C# | RN | JSX | JS | NodeJS |
          CSS | HTML | Python
        </Text>
        <View style={style.areaDosQuadradinhos}>{quadradinhos(29 * 7)}</View>
        <Pressable onPress={handlePressGoToMyProfileGithub}>
          <View style={[style.button]}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: 'white',
    textAlign: 'center',
    marginTop: '1%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
  },
  nickname: {
    color: colorFontGithub,
    fontSize: 18,
  },
  Biografia: {
    color: colorFontGithub,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#585858',
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
  },
  backgroundVerde: {backgroundColor: 'green'},
  backgroundAzul: {backgroundColor: 'lightblue'},
  areaDosQuadradinhos: {
    width: 350,
    margin: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  quadradinho: {
    width: 10,
    height: 10,
    borderRadius: 1.5,
    margin: 1,
    alignItems: 'center',
  },
});
