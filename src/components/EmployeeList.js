import React from 'react';
import {ListView,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions'
class EmployeeList extends React.Component{
    componentWillMount()
    {
        this.props.employeesFetch();
        this.createDataSource(this.props)

    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(this.nextProps)
    }
    createDataSource({employees})
    {
        
        const ds=new ListView.DataSource({
            rowHasChanged:(r1,r2) =>r1!=r2
        })
        this.dataSource=ds.cloneWithRows(employees)
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