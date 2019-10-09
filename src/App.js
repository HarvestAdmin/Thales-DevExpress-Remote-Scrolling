import React from 'react';

import DataGrid, { Scrolling, Paging, Column, HeaderFilter } from 'devextreme-react/data-grid';

class App extends React.Component {
  constructor() {
    super();
    this.apiUrl = 'http://localhost:62067/Matching/ResultGrid.aspx/GetPagedData';
    this.StartTime = null;
    this.userId = 48;
    this.matchOrExecutionId = 176376;

    this.state = {
      dataSource: {},
      outputType: 0,
      action: '<actions><showdetails>1</showdetails></actions>',
    };
  }


  componentDidMount() {
    fetch(this.apiUrl, {
      method: 'POST',
      // body: JSON.stringify({ userId: this.state.userId, executionId: this.state.matchOrExecutionId, outputType: this.state.outputType, action: this.state.action }),
      body: JSON.stringify({ UserId: this.userId, ExecutionId: this.matchOrExecutionId, OutputType: this.state.outputType, Action: this.state.action, LastRowNumber : 0, BlockSize : 100 }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(response => {
        this.StartTime = performance.now();
        return response.json();
      }, error => {
        return error.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({ dataSource: jsonData });
      });
  }

  render() {
    return (
      <DataGrid
        elementAttr={{
          id: 'gridContainer'
        }}
        dataSource={this.state.dataSource}
        showBorders={true}
        remoteOperations={true}
        wordWrapEnabled={true}
      >
        <Scrolling mode={'virtual'} rowRenderingMode={'virtual'} />
        <Paging pageSize={'100'} />
        <HeaderFilter visible={true} allowSearch={true} />

        <Column dataField={'GridRow'} width={'75'} />
        <Column dataField={'MatchStatus'} caption={'Store'} width={'150'} />
        <Column dataField={'MatchGroup'} caption={'Category'} width={'120'} />
        <Column dataField={'gridcol_1'} caption={'Product'} />
        
      </DataGrid>
    );
  }
}

export default App;
