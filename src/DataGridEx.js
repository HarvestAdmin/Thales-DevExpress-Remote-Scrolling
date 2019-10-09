import React from 'react';
import DataGrid, {
    Column
} from 'devextreme-react/data-grid'; 
 
export default class App extends React.Component {
    render() {
        return (
            <DataGrid>
                <Column
                    dataField="firstName"
                    caption="First Name" width={'150'} 
                />
                <Column
                    dataField="lastName"
                    caption="Last Name" width={'150'} 
                    defaultVisible={true}
                />
            </DataGrid>
        );
    }
}