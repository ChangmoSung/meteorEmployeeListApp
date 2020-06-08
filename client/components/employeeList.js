import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees'
import EmployeeDetail from './employeeDetail'

class EmployeeList extends Component {
    componentDidMount() {
        this.page = 10
    }

    handleButtonClick = () => {
        Meteor.subscribe('employees', this.page)
        this.page += 5
    }

    render() { 
        return ( 
            <div>
                <div className='employeeList'>
                    {this.props.employees.map(employee => <EmployeeDetail key={employee.name} employee={employee} />)}
                </div>

                <button onClick={this.handleButtonClick} className='btn btn-primary'>Load More..</button>
            </div>
        );
    }
}
 

export default withTracker(() => {
    const handle = Meteor.subscribe('employees', 5);

    return { 
        loading: !handle.ready(),
        employees: Employees.find({}).fetch() 
    }
})(EmployeeList)