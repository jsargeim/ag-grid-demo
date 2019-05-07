import * as React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export interface Props {
    height?: number,
    width?: number,
}

export const defaultProps = {
    height: 400,
    width: 800,
}

interface State {
    gridOptions: any,
}

export class AgTable extends React.Component<Props, State> {
    state: State = {
        gridOptions: {
            columnDefs: [{
                headerName: "Make", field: "make"
              }, {
                headerName: "Model", field: "model"
              }, {
                headerName: "Price", field: "price"
              }],
              rowData: [{
                make: "Toyota", model: "Celica", price: 35000
              }, {
                make: "Ford", model: "Mondeo", price: 32000
              }, {
                make: "Porsche", model: "Boxter", price: 72000
              }]
        }
    }

    render() {
        return (
            <div style={{height: '100%', width: '100%'}} className="ag-theme-balham">
                <AgGridReact
                    gridOptions={this.state.gridOptions}
                    rowSelection="multiple"
                    rowMultiSelectWithClick
                    animateRows
                />
                
            </div>
        )
    }
}