import React, { Component } from 'react';
import {View,Picker,Text} from 'react-native'
import {CardSection,Input} from './common'
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'
class EmployeeForm extends Component {
    render()
    {
        return(
           <View>
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
                    <Text style={styles.pickerTextStyle}>Joining Date</Text>
                    <CardSection style={{paddingLeft:18}}>
                    
                        <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop:'shift',value:day})}>
                        
                            <Picker.Item label="1" value ="1" />
                            <Picker.Item label="2" value ="2" />
                            <Picker.Item label="3" value ="3" />
                            <Picker.Item label="4" value ="4" />
                            <Picker.Item label="5" value ="5" />
                            <Picker.Item label="6" value ="6" />
                            <Picker.Item label="7" value ="7" />
                            <Picker.Item label="8" value ="8" />
                            <Picker.Item label="9" value ="9" />
                            <Picker.Item label="10" value ="10" />
                            <Picker.Item label="11" value ="11" />
                            <Picker.Item label="12" value ="12" />
                            <Picker.Item label="13" value ="13" />
                            <Picker.Item label="14" value ="14" />
                            <Picker.Item label="15" value ="15" />
                            <Picker.Item label="16" value ="16" />
                            <Picker.Item label="17" value ="17" /> 
                            <Picker.Item label="18" value ="18" />
                            <Picker.Item label="19" value ="19" />
                            <Picker.Item label="20" value ="20" />
                            <Picker.Item label="21" value ="21" />
                            <Picker.Item label="22" value ="22" />
                            <Picker.Item label="23" value ="23" />
                            <Picker.Item label="24" value ="24" />
                            <Picker.Item label="25" value ="25" />
                            <Picker.Item label="26" value ="26" />
                            <Picker.Item label="27" value ="27" />
                            <Picker.Item label="28" value ="28" />
                            <Picker.Item label="29" value ="29" />
                            <Picker.Item label="30" value ="30" />
                            <Picker.Item label="31" value ="31" />
                           



                        </Picker>
                    </CardSection>
            </View>
        )   
        
    }
}
const styles={
    pickerTextStyle:{
        fontSize:18,
        marginTop: 10,
        paddingLeft: 25,
    }
}
const mapStateToProps=(state) => {
    const {name,phone,shift}=state.employeeForm
    return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);