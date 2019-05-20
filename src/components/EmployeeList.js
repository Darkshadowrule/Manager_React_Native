import React from 'react';
import {Text,View} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions'
class EmployeeList extends React.Component{
    componentWillMount()
    {
        this.props.employeesFetch();
    }
    render()
    {
        return(
            <View>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
                <Text>Employee List </Text>
            </View>
        )
    }
}
export default connect(null,{employeesFetch})(EmployeeList);