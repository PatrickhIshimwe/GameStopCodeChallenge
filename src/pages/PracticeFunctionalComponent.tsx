import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const PracticeFunctionalComponent = () => {
    const [form, setForm] = useState({
        driverName: '',
        truckNumber: '',
        date: '',
        startTime: '',
        endTime: '',
        startLocation: '',
        endLocation: '',
        milesDriven: '',
        hoursDriven: '',
        notes: '',
    });
    const [submittedForm, setSubmittedForm] = useState({
        driverName: '',
        truckNumber: '',
        date: '',
        startTime: '',
        endTime: '',
        startLocation: '',
        endLocation: '',
        milesDriven: '',
        hoursDriven: '',
        notes: '',
    });

    const removeSpace = (value: string) => {
        return value.replace(' ', '')
    }

    const handleInputChange = (name: string, value: string) => {
        if (name == 'notes') {
            value = removeSpace(value)
        }
        setForm({ ...form, [name]: value });
        setForm({ ...form, [name]: value });
    };

    const submitForm = () => {
        setSubmittedForm(form);
        console.log(form);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Driver's Name"
                value={form.driverName}
                onChangeText={(value) => handleInputChange('driverName', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Truck Number"
                value={form.truckNumber}
                onChangeText={(value) => handleInputChange('truckNumber', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Date"
                value={form.date}
                onChangeText={(value) => handleInputChange('date', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Start Time"
                value={form.startTime}
                onChangeText={(value) => handleInputChange('startTime', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="End Time"
                value={form.endTime}
                onChangeText={(value) => handleInputChange('endTime', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Starting Location"
                value={form.startLocation}
                onChangeText={(value) => handleInputChange('startLocation', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Ending Location"
                value={form.endLocation}
                onChangeText={(value) => handleInputChange('endLocation', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Miles Driven"
                value={form.milesDriven}
                onChangeText={(value) => handleInputChange('milesDriven', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Hours Driven"
                value={form.hoursDriven}
                onChangeText={(value) => handleInputChange('hoursDriven', value)}
                style={styles.input}
            />
            <TextInput
                placeholder="Notes"
                value={form.notes}
                onChangeText={(value) => handleInputChange('notes', value)}
                style={styles.input}
            />
            <Button title="Submit" onPress={submitForm} />
            {submittedForm && (
                <View style={styles.logContainer}>
                    <Text>{submittedForm.driverName} | {submittedForm.truckNumber} | {submittedForm.date}</Text>
                    <Text>{submittedForm.startTime} - {submittedForm.endTime}</Text>
                    <Text>{submittedForm.startLocation} to {submittedForm.endLocation}</Text>
                    <Text>Miles Driven: {submittedForm.milesDriven} | Hours Driven: {submittedForm.hoursDriven}</Text>
                    <Text>Notes: {submittedForm.notes}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    logContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default PracticeFunctionalComponent;

// import React from 'react';
// import {View, TextInput, Button, Text, StyleSheet, Dimensions, BackHandler} from 'react-native';
//
// export type DriverLog = {
//     driverName: string,
//     truckNumber: string,
//     date: string,
//     startTime: string,
//     endTime: string,
//     startLocation: string,
//     endLocation: string,
//     milesDriven: string,
//     hoursDriven: string,
//     notes: string,
// }
//
// export default class TruckDriverLogApp extends React.Component {
//     state = {
//         driverName: '',
//         truckNumber: '',
//         date: '',
//         startTime: '',
//         endTime: '',
//         startLocation: '',
//         endLocation: '',
//         milesDriven: '',
//         hoursDriven: '',
//         notes: '',
//         submittedForm: {
//             driverName: '',
//             truckNumber: '',
//             date: '',
//             startTime: '',
//             endTime: '',
//             startLocation: '',
//             endLocation: '',
//             milesDriven: '',
//             hoursDriven: '',
//             notes: ''
//         },
//     };
//
//     handleInputChange = (name: string, value: string) => {
//         this.setState({ [name]: value });
//     };
//
//     submitForm = () => {
//         const { driverName, truckNumber, date, startTime, endTime, startLocation, endLocation, milesDriven, hoursDriven, notes } = this.state;
//         this.setState({
//             submittedForm: { driverName, truckNumber, date, startTime, endTime, startLocation, endLocation, milesDriven, hoursDriven, notes }
//         });
//     };
//
//     render() {
//
//         console.log('size===>', Dimensions.get('screen'));
//
//         const { driverName, truckNumber, date, startTime, endTime, startLocation, endLocation, milesDriven, hoursDriven, notes, submittedForm } = this.state;
//
//         return (
//             <View style={styles.container}>
//                 <TextInput
//                     placeholder="Driver's Name"
//                     value={driverName}
//                     onChangeText={(value) => this.handleInputChange('driverName', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Truck Number"
//                     value={truckNumber}
//                     onChangeText={(value) => this.handleInputChange('truckNumber', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Date"
//                     value={date}
//                     onChangeText={(value) => this.handleInputChange('date', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Start Time"
//                     value={startTime}
//                     onChangeText={(value) => this.handleInputChange('startTime', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="End Time"
//                     value={endTime}
//                     onChangeText={(value) => this.handleInputChange('endTime', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Starting Location"
//                     value={startLocation}
//                     onChangeText={(value) => this.handleInputChange('startLocation', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Ending Location"
//                     value={endLocation}
//                     onChangeText={(value) => this.handleInputChange('endLocation', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Miles Driven"
//                     value={milesDriven}
//                     onChangeText={(value) => this.handleInputChange('milesDriven', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Hours Driven"
//                     value={hoursDriven}
//                     onChangeText={(value) => this.handleInputChange('hoursDriven', value)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Notes"
//                     value={notes}
//                     onChangeText={(value) => this.handleInputChange('notes', value)}
//                     style={styles.input}
//                 />
//                 <Button title="Submit" onPress={this.submitForm} />
//                 {submittedForm && (
//                     <View style={styles.logContainer}>
//                         <Text>{submittedForm.driverName} | {submittedForm.truckNumber} | {submittedForm.date}</Text>
//                         <Text>{submittedForm.startTime} - {submittedForm.endTime}</Text>
//                         <Text>{submittedForm.startLocation} to {submittedForm.endLocation}</Text>
//                         <Text>Miles Driven: {submittedForm.milesDriven} | Hours Driven: {submittedForm.hoursDriven}</Text>
//                         <Text>Notes: {submittedForm.notes}</Text>
//                     </View>
//                 )}
//             </View>
//         );
//     }
// }
//
// const dimensions = Dimensions.get('window').height
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: dimensions >= 560 ? 20 : 20,
//         backgroundColor: '#f5f5f5',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingLeft: 8,
//     },
//     logContainer: {
//         marginTop: 20,
//         padding: 10,
//         backgroundColor: 'white',
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 5,
//     },
// });

