import React, { Component } from 'react';
import {
	AppRegistry,
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	KeyboardAvoidingView,
	StatusBar,
	AsyncStorage,
} from 'react-native';

export default class login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fname: '',
			laname: '',
			memNo: '',
			token: '',
			isValid: false,
		};
	}

	//login function.
	_requestLogin(mem) {
		//input validation
		var regname = /^(\s)*[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*(\s)*$/;
		var regnum = /^[a-z0-9]+$/;

		if (!regname.test(this.state.fname)) {
			alert('invalid input');
			return;
		}

		if (!regname.test(this.state.lname)) {
			alert('invalid input');
			return;
		}

		if (!regnum.test(this.state.memNo)) {
			alert('invalid input');
			return;
		}

		let data = {
			mem_no: mem,
		};
		//Remove any existing Token/User
		AsyncStorage.clear();

		if (token == null) return;
		var header = {
			'Content-Type': 'application/json',
			Authorization: token,
		};
		let token = this._fetchURL(header, data).then(token => {
			if (token != null) {
				this.props.navigation.navigate('Home');
			}
		});
	}

	_fetchURL(header, data) {
		let tok = '';
		var Member_URL = 'http://dev20.onlinetestingserver.com/sos-new/request-member-search';
		fetch(Member_URL, { header, data })
			.then(res => {
				res.json;
			})
			.then(res => {
				return res.AgentAccessToken;
			})
			.catch(err => {
				alert(err.message);
				return null;
			});
	}

	static navigationOptions = {
		header: null,
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.statusBar} />
				<ImageBackground source={require('../../imgs/bac.png')} style={styles.backgroundImage}>
					<View style={styles.content}>
						<KeyboardAvoidingView behavior="padding">
							<Image source={require('../../imgs/logo.png')} style={styles.logo} />
							<TextInput
								autoFocus={false}
								underlineColorAndroid="transparent"
								style={styles.input}
								placeholder="First Name"
								keyboardType="default"
								onChangeText={fname => this.setState({ fname: fname })}
								value={this.state.fname}
							/>
							<TextInput
								autoFocus={false}
								underlineColorAndroid="transparent"
								style={styles.input}
								placeholder="Last Name"
								keyboardType="default"
								onChangeText={lname => this.setState({ lname: lname })}
								value={this.state.lname}
							/>
							<TextInput
								autoFocus={false}
								underlineColorAndroid="transparent"
								style={styles.input}
								placeholder="Member Number"
								keyboardType="numeric"
								onChangeText={memNo => this.setState({ memNo: memNo })}
								value={this.state.memNo}
							/>
							<TouchableOpacity
								onPress={() => {
									this._requestLogin(this.state.memNo);
								}}
								isDisabled={true}
								style={styles.buttonContainer}
							>
								<Text style={styles.buttonText}>LOGIN</Text>
							</TouchableOpacity>
						</KeyboardAvoidingView>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: '#064f9a',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	newview: {
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 300,
		height: 200,
		resizeMode: "contain",
		marginBottom: 20,
		marginTop: 0,
	},
	input: {
		fontSize: 16,
		padding: 15,
		marginBottom: 15,
		backgroundColor: 'rgba(255,255,255,0.3)',
		alignSelf: 'stretch',
		borderRadius: 5,
	},
	buttonContainer: {
		backgroundColor: '#df1e36',
		alignSelf: 'stretch',
		padding: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	forText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'right',
		marginTop: 10,
	},
	kbd: {
		marginBottom: 10,
	},
});
