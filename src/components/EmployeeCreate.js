import React from 'react';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'

class EmployeeCreate extends React.Component{
    render()
    {
        return(
            <Card>
                <CardSection>
                 <Input
                 label="Name"
                 placeholder="Darkshadow"
                 onChangeText={text=>this.props.employeeUpdate({prop:'name',value:text})}
                 value={this.props.name}/>
                </CardSection>
                <CardSection>
                    <Input
                    label="Phone"
                    placeholder="555-555-5555"
                    value={this.props.phone}
                    onChangeText={text=>this.props.employeeUpdate({prop:'phone',value:text})}
                    />
                    </CardSection>
                    <CardSection>
                    <Button>
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

export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate) ;