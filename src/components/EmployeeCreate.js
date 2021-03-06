import React from 'react';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import {employeeCreate,employeeUpdate} from '../actions'
import EmployeeForm from './EmployeeForm'
class EmployeeCreate extends React.Component{
    onButtonPress()
    {
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift:shift || '1'})

    }
    render()
    { 
        return(
            <Card>
                <EmployeeForm {...this.props}/>
               
                    <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Create
                    </Button>
                    </CardSection>
            </Card>
        )
    }
}
const mapStateToProps=(state) => {
    const {name,phone,shift}=state.employeeForm
    return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate) ;