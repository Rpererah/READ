import React,{useState,useEffect} from 'react'
import {ScrollView,ActivityIndicator,Text,FlatList,View} from 'react-native'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    const titulo='titulo'
    const descricao='descricao'
  useEffect(() => {
    fetch('http://10.0.2.2:8000/user/read')
      .then((response) => response.json())
      .then((json) => setData(json.users))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <FlatList
        
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
        <Text  style={{backgroundColor:'#a56060',fontSize:20,alignItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center',flexDirection:'row'}}>Nome:{item.USER_NOME} Deficiencia:{item.USER_DEFICIENCIA}</Text>
        )}
      />
    </View>
  );
};

export default App;
