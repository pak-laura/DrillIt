import React,{Component} from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Question from './src/Question';
import styles from './src/Style';

export default class Input extends Component{
	constructor(props){
		super(props);
		this.state = {
			answer: '',
			response: 'Begin',
			first: Question()[0],
			second: Question()[0],
			op: Question()[2],
			value: ''
		};
	}

	giveQuestion(){
		if(this.state.op == '-'){
			if(this.state.first > this.state.second){
				return(
					<Text style ={styles.questionContainer}>
						{this.state.first} {this.state.op} {this.state.second}
					</Text>
				);
			} else{
				const hold = this.state.first;
				this.setState({first: this.state.second, second: hold});
				return(
					<Text style ={styles.questionContainer}>
						{this.state.second} {this.state.op} {this.state.first}
					</Text>
				);
			}
		} else{ //not subtraction
				return(
					<Text style ={styles.questionContainer}>
						{this.state.first} {this.state.op} {this.state.second}
					</Text>
				);
		}
	}
	
	handleAns(){
		const answerInt = parseInt(this.state.answer, 10);
		if (this.state.op == '+'){
			if(this.state.first+this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: ''});
			} else{
				this.setState({response: "Try Again"});
			}
		} //end if +
		else if (this.state.op == '-'){ 
			if(this.state.first-this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: ''});
			} else{
				this.setState({response: "Try Again"});
			}
		} //end else if -
		else{
			if (this.state.first*this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: ''});
			} else{
				this.setState({response: "Try Again"});
			}
		} //end else *
	}

	render(){
		return(
			<View style={styles.rootContainer}>
				<View>
					<Text style={styles.responseContainer}>
						{this.state.response}
					</Text>
					<Text style ={styles.questionContainer}>
						{this.giveQuestion()}
					</Text>
				</View>
				<View style={styles.bottomContainer}>
					<TextInput style={styles.answerContainer}
						placeholder="Enter answer"
						onChangeText ={(text) => this.setState({answer: text, value: text})}
						keyboardType = 'numeric'
						value = {this.state.value}
					/>
					<View style = {styles.buttonContainer}>
						<Button
							onPress = {() => this.handleAns()}
							title ="Submit"
							color="#841584"
						/>
					</View>
				</View>
			</View>
			);
	}
}

AppRegistry.registerComponent('DrillIt', ()=> Input);


