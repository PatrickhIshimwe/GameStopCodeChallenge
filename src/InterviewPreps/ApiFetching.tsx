import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, View, Text} from "react-native";


const GetData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const json = await response.json()
                setData(json)
                setLoading(false)
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if (loading) {
        return (
            <view>
                <ActivityIndicator size={'large'} color={'red'}/>
            </view>
        )
    }

    // if (!data) {
    //     return null
    // }

    return (
        <View style={{flex: 1, padding: 20}}>
            <FlatList data={data}
                      // keyExtractor={(item) => item.id}
                      renderItem={({item}) => (
                          <View style={{ marginBottom: 20 }}>
                              {/*<Text>{item.title}</Text>*/}
                              {/*<Text>{item.body}</Text>*/}
                          </View>
                      )}
            />
        </View>
    )

}

export default GetData


