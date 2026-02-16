import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const [amount, setAmount] = useState("3.00");
  const [recipient, setRecipient] = useState("Edomyas");
  const [date, setDate] = useState("2026/02/15 18:50:02");
  const [txn, setTxn] = useState("DBF5T28281");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.topBar}>Download        Share</Text>

        <View style={styles.successCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        <Text style={styles.successText}>Successful</Text>

        <Text style={styles.amount}>-{amount} (ETB)</Text>

        <View style={styles.line} />

        <Text style={styles.row}>Transaction Time: {date}</Text>
        <Text style={styles.row}>Transaction Type: Transfer Money</Text>
        <Text style={styles.row}>Transaction To: {recipient}</Text>
        <Text style={styles.row}>Transaction Number: {txn}</Text>

        <Text style={styles.qr}>QR Code ></Text>

        <View style={styles.adBox}>
          <Text style={styles.adText}>
            Above 60 Million ETB Prizes!
          </Text>
        </View>

        <TouchableOpacity style={styles.finishedBtn}>
          <Text style={styles.finishedText}>Finished</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.editor}>
        <Text style={{ fontWeight: "bold" }}>Edit Demo Data</Text>

        <TextInput
          placeholder="Amount"
          style={styles.input}
          onChangeText={setAmount}
        />

        <TextInput
          placeholder="Recipient"
          style={styles.input}
          onChangeText={setRecipient}
        />

        <TextInput
          placeholder="Transaction Time"
          style={styles.input}
          onChangeText={setDate}
        />

        <TextInput
          placeholder="Transaction Number"
          style={styles.input}
          onChangeText={setTxn}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    elevation: 5,
  },
  topBar: {
    color: "#7abf2a",
    marginBottom: 20,
  },
  successCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#7abf2a",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    color: "#fff",
    fontSize: 32,
  },
  successText: {
    textAlign: "center",
    color: "#7abf2a",
    fontSize: 20,
    marginTop: 10,
  },
  amount: {
    textAlign: "center",
    fontSize: 36,
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  row: {
    marginVertical: 5,
  },
  qr: {
    color: "#7abf2a",
    marginTop: 10,
  },
  adBox: {
    marginTop: 20,
    backgroundColor: "#7abf2a",
    padding: 15,
    borderRadius: 12,
  },
  adText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  finishedBtn: {
    marginTop: 20,
    backgroundColor: "#7abf2a",
    padding: 15,
    borderRadius: 12,
  },
  finishedText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  editor: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
});
