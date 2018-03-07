import React from 'react';
import { Button, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './Style';

export default props => (
  <Grid style={styles.rootContainer}>
    <Row size={11} />
    <Row size={10}>
      <Text style={styles.hugeText}>Score</Text>
    </Row>
    <Row size={10}>
      <Text style={styles.hugeText}>87%</Text>
    </Row>
    <Row size={5}>
      <Col style={styles.centerCol}>
        <Text style={styles.bigText}>Hit</Text>
      </Col>
      <Col />
      <Col style={styles.centerCol}>
        <Text style={styles.bigText}>Miss</Text>
      </Col>
    </Row>
    <Row size={12}>
      <Col style={styles.centerCol}>
        <Text style={styles.bigText}>30</Text>
      </Col>
      <Col />
      <Col style={styles.centerCol}>
        <Text style={styles.bigText}>9</Text>
      </Col>
    </Row>
    <Row size={5}>
      <Col>
        <Text style={styles.mediumText}>Time</Text>
      </Col>
    </Row>
    <Row size={10}>
      <Col>
        <Text style={styles.mediumText}>5 min 20 sec</Text>
      </Col>
    </Row>
    <Row size={5}>
      <Button onPress={() => props.history.push('/')} title="New Game" />
    </Row>
    <Row size={10}>
      <Text style={styles.smallText}>Tap your Score, Hit, or Miss for details</Text>
    </Row>
  </Grid>
);
