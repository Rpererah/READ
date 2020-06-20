import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, ScrollView } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    const titulo='titulo'
    const descricao='descricao'
  useEffect(() => {
    fetch('http://10.0.2.2:3000/respostas')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 24, }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <Text  style={{backgroundColor:'#a56060',fontSize:20,alignItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center',flexDirection:'row'}}>Pergunta:{item.title} Resposta:{item.desc}</Text>
          )}
        />
      )}
    </ScrollView>
  );
};