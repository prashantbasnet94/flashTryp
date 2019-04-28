//import
import React,{Component} from 'react';
import { ScrollView, Text} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';



//create component
class AlbumList extends Component {
state ={ albums: [] }

	componentDidMount() {
		 Axios.get('https://api.myjson.com/bins/19v2v8')
		 	.then(response => this.setState({ albums: response.data }));
	}

	const
	renderAlbums() {
		return this.state.albums.map(album =>
		//	<Text Key={ album.A}> { album.A} </Text>
			<AlbumDetail style={{flex:1}}Key={album.A} album={album} />
		);
	}

	render() {
		return (
			<ScrollView style={style.width}>
				 {this.renderAlbums()}

			</ScrollView>
		);
	}



}
const style ={
	width:{
		width: '100%'
	}
}


//render export
export default AlbumList;
