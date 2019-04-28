//import
import React from 'react';
import{View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export var favoritePosts = [];

const Description = ({album}) => {
    const{
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P
    }	= album;

    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
        Tags,
        TagsFont
    } = style;


    return (
        <Card >
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: P}}
                    />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {A} </Text>
                    <View style ={Tags}>
                        <Text style ={TagsFont}> {B} </Text>
                        <Text style ={TagsFont}> {C} </Text>
                        <Text style ={TagsFont}> {D} </Text>
                        <Text style ={TagsFont}> {E} </Text>
                        <Text style ={TagsFont}> {F} </Text>
                        <Text style ={TagsFont}> {G} </Text>
                        <Text style ={TagsFont}> {H} </Text>
                        <Text style ={TagsFont}> {J} </Text>
                    </View>

                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: N }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(I)}  >
                    Visit Site
                </Button>

                <Button onPress={() => {
                    favoritePosts.push(O);

                }}>
                    <Text>{O}</Text>
                </Button>
            </CardSection>


        </Card>

    );
};


const style = {
    topHeaderStyle: {
        alignItems:'flex-start'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 15
    },
    imageStyle: {

        height: 300,
        flex: 1,
        width: null,
    },
    Tags: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    TagsFont:{
        fontSize:12
    }
};
//export
export default Description;


