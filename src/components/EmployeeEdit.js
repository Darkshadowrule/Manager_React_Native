import React from 'react';
import {Card, CardSection, Button} from './common';
import _ from 'lodash'
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave} from '../actions'
import EmployeeForm from './EmployeeForm'
import Communications from 'react-native-communications'
class EmployeeEdit extends React.Component{
    componentWillMount()
    {
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value})
        })
    }
    onButtonPress()
    {
        const {name,phone,shift}=this.props
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid})
    }
    onTextPress()
    {
        const {phone}=this.props
        Communications.phonecall(phone,true)

    }
    render()
    {
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress ={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Call
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
mapStateToProps=(state)=>{
    const{name,phone,shift}=state.employeeForm
    return {name,phone,shift}
}
export default connect(mapStateToProps,{employeeUpdate,employeeSave})(EmployeeEdit);