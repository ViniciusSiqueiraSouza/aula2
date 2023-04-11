import React, { useState } from 'react';

import { View, Text, TextInput, Button, Alert, StyleSheet } from'react-native';

export default function App() {

  const [endereco, setEndereco] = useState(null);
  
  const [campocep, setCep] = useState(null);

  //Função usando fetch para pegar informações

const getCep = (cep) => {

  const endpoint = `http://viacep.com.br/ws/${cep}/json/`;
  
  fetch(endpoint)
  
  .then(resposta=>resposta.json())
  
  .then(json=> {
  
  const endereco = { //constante para guardarmos as informações do retorno da API
  
  logradouro: json.logradouro,
  
  bairro: json.bairro,
  
  localidade: json.localidade,
  
  uf: json.uf,
  
  ddd: json.ddd
  
  };
  console.log(endereco);

setEndereco(endereco);

})

.catch(() => {

Alert.alert('Erro', 'Não foi possível carregar os dados do CEP');

});

}

return (

  <View>

  <TextInput 
  
  placeholder="Digite o CEP"
  
  onChangeText={setCep}
  />

 
<TextInput 
  
  placeholder="Digite o seu nome"
  
  />

{endereco != null && (

<Text>Rua: {endereco.logradouro}</Text>

)}

{endereco != null && (

<Text>Localidade: {endereco.localidade}</Text>

)}

{endereco!= null && (

<Text>Estado: {endereco.uf}</Text>

)}

{endereco != null && (

<Text>DDD: {endereco.ddd}</Text>

)}

<Button title="Consultar CEP" onPress={() =>getCep(campocep)}/>



</View>

);

}

const styles = StyleSheet.create({

container: { flex: 1, backgroundColor: '#fff' },

topo: { height: 40, padding: 5, marginBottom: 5, backgroundColor: 'blue' },

topoTitulo: { fontSize: 20, color: '#fff', textAlign: 'center' },

cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },

cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

pokemonBox: { alignItems: 'center' },

pokemonNome: { fontSize: 18 },

pokemonPeso: { fontSize: 18 },

pokemonImg: { width: 50, height: 50, },

pokemonMedia: {opacity: 0, fontSize: 2, textAlign: 'center', color: `#000`, marginTop: 15},


centered_label: {

flexDirection:'row',

flexWrap:'wrap',

justifyContent: "center",

alignItems: "center",

},

});