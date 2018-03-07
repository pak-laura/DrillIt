import React, { Component } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getQuestion from './Question';
import styles from './Style';

export default class Game extends Component {
  constructor(props) {
    super(props);
    const [first, second, op] = getQuestion();
    this.state = {
      answer: '',
      response: 'Begin',
      first,
      second,
      op,
      value: '',
      hit: 0,
      miss: 0,
      timermin: 59,
      timersec: 59,
    };
  }

  handleAns() {
    let isRight = false;
    const answerInt = parseInt(this.state.answer, 10);
    if (this.state.op === '+') {
      if (this.state.first + this.state.second === answerInt) {
        isRight = true;
      }
    } else if (this.state.op === '-') {
      if (this.state.first - this.state.second === answerInt) {
        isRight = true;
      }
    } else if (this.state.first * this.state.second === answerInt) {
      isRight = true;
    }
    if (isRight) {
      const [first, second, op] = getQuestion();
      this.setState({
        response: 'Correct',
        first,
        second,
        op,
        value: '',
        hit: this.state.hit + 1,
      });
    } else {
      this.setState({ response: 'Try Again', miss: this.state.miss + 1 });
    }
  } // end getQuestion

  // gameOver() {
  //   // if (this.state.response == 'Results') {
  //   // }
  // }

  render() {
    return (
      <Grid style={styles.rootContainer}>
        <Row size={50}>
          <Col style={styles.centerCol}>
            <Row size={29} />
            <Row size={8}>
              <Text style={styles.mediumText}>Hit:</Text>
            </Row>
            <Row size={8}>
              <Text style={styles.mediumText}>{this.state.hit}</Text>
            </Row>
            <Row size={60} />
          </Col>
          <Col style={styles.topContainer}>
            <Row size={4} />
            <Row size={6}>
              <Text style={styles.bigText}>
                {this.state.timermin}:{this.state.timersec}
              </Text>
            </Row>
            <Row size={3}>
              <Button
                onPress={() => {
                  this.setState({ timermin: 0, timersec: 0 });
                }}
                title="Quit"
                style={styles.smallText}
              />
            </Row>
            <Row size={6} />
            <Row size={5}>
              <Button
                onPress={() => this.props.history.push('/Score')}
                title={this.state.response}
                style={styles.bigText}
              />
            </Row>
            <Row size={8}>
              <Text style={styles.bigText}>
                {this.state.first} {this.state.op} {this.state.second}
              </Text>
            </Row>
            <Row size={6} width={100} style={{ backgroundColor: 'red' }}>
              <TextInput
                placeholder="Enter answer"
                onChangeText={text => this.setState({ answer: text, value: text })}
                keyboardType="numeric"
                value={this.state.value}
                style={styles.smallText}
              />
            </Row>
            <Row size={6}>
              <Button
                onPress={() => this.handleAns()}
                title="Submit"
                color="#841584"
                style={styles.mediumText}
              />
            </Row>
            <Row size={10} />
          </Col>
          <Col style={styles.topContainer}>
            <Row size={29} />
            <Row size={8}>
              <Text style={styles.mediumText}>Miss:</Text>
            </Row>
            <Row size={8}>
              <Text style={styles.mediumText}>{this.state.miss}</Text>
            </Row>
            <Row size={60} />
          </Col>
        </Row>
        <Row size={40} />
      </Grid>
    );
  }
}
