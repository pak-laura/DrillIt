import React,{Component} from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
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
			value: '',
			hit: 0,
			miss: 0
		};
	}

	giveQuestion(){
		if(this.state.op == '-'){
			if(this.state.first > this.state.second){
				return(
					<Text>
						{this.state.first} {this.state.op} {this.state.second}
					</Text>
				);
			} else{
				const hold = this.state.first;
				this.setState({first: this.state.second, second: hold});
				return(
					<Text>
						{this.state.second} {this.state.op} {this.state.first}
					</Text>
				);
			}
		} else{ //not subtraction
				return(
					<Text>
						{this.state.first} {this.state.op} {this.state.second}
					</Text>
				);
		}
	}
	
	handleAns(){
		const answerInt = parseInt(this.state.answer, 10);
		if (this.state.op == '+'){
			if(this.state.first+this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: '', hit: this.state.hit + 1});
			} else{
				this.setState({response: "Try Again", miss: this.state.miss + 1});
			}
		} //end if +
		else if (this.state.op == '-'){ 
			if(this.state.first-this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: '', hit: this.state.hit + 1});
			} else{
				this.setState({response: "Try Again", miss: this.state.miss + 1});
			}
		} //end else if -
		else{
			if (this.state.first*this.state.second == answerInt){
				this.setState({response: "Correct", first: Question()[0], second: Question()[1], op: Question()[2], value: '', hit: this.state.hit + 1});
			} else{
				this.setState({response: "Try Again", miss: this.state.miss + 1});
			}
		} //end else *
	}

	render(){
		return(
			<Grid style = {styles.rootContainer}>
				<Row size = {50}>
					<Col style = {styles.topContainer}>
						<Row size = {29}/>
						<Row size = {8}>
							<Text style = {styles.mediumText}>
								Hit:
							</Text>
						</Row>
						<Row size = {8}>
							<Text style = {styles.mediumText}>
								{this.state.hit}
							</Text>
						</Row>
						<Row size = {60}/>
					</Col>
					<Col style = {styles.topContainer}>
						<Row size = {4} ></Row>
						<Row size = {6}>
							<Text style = {styles.bigText}>
								59:59
							</Text>
						</Row>
						<Row size = {3}>
							<Text style = {styles.smallText}>
								QuitHold
							</Text>
						</Row>
						<Row size = {6} ></Row>
						<Row size = {6}>
							<Text style = {styles.mediumText}>
								{this.state.response}
							</Text>
						</Row>
						<Row size = {8}>
							<Text style = {styles.bigText}>
								{this.giveQuestion()}
							</Text>
						</Row>
						<Row size = {6}>
							<TextInput
								placeholder="Enter answer"
								onChangeText ={(text) => this.setState({answer: text, value: text})}
								keyboardType = 'numeric'
								value = {this.state.value}
								style = {styles.smallText}
							/>
						</Row>
						<Row size = {6}>
								<Button
									onPress = {() => this.handleAns()}
									title ="Submit"
									color="#841584"
									style = {styles.mediumText}
								/>
						</Row>
						<Row size = {10} ></Row>
					</Col>
					<Col style = {styles.topContainer}>
						<Row size = {29}/>
						<Row size = {8}>
							<Text style = {styles.mediumText}>
								Miss:
							</Text>
						</Row>
						<Row size = {8}>
							<Text style = {styles.mediumText}>
								{this.state.miss}
							</Text>
						</Row>
						<Row size = {60}/>
					</Col>
				</Row>
				<Row size= {40} />
			</Grid>
			);
	}
}

AppRegistry.registerComponent('DrillIt', ()=> Input);


