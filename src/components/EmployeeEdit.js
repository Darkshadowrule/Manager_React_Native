import React from 'react';
import {Card, CardSection, Button,Confirm} from './common';
import _ from 'lodash'
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave} from '../actions'
import EmployeeForm from './EmployeeForm'
import Communications from 'react-native-communications'
class EmployeeEdit extends React.Component{
    state ={showModal:false}
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
    onAccept(){

    }
    onDecline()
    {
        this.setState({showModal:false})
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
                <CardSection>
                    <Button onPress={()=> this.setState({showModal:!this.state.showModal})}>
                        Delete
                    </Button>
                </CardSection>
                <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                
                
                >
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        )
    }
}
mapStateToProps=(state)=>{
    const{name,phone,shift}=state.employeeForm
    return {name,phone,shift}
}
export default connect(mapStateToProps,{employeeUpdate,employeeSave})(EmployeeEdit);