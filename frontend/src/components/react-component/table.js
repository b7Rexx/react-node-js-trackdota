import React, {Component} from 'react';
import * as Carbon from 'carbonjs';

class Table extends Component {

  getTableHead() {
    return (
      <tr>
        {
          this.props.tableConfig.map((td, index) => {
            return (<th key={index}>{td.name}</th>);
          })
        }
      </tr>
    );
  }

  getTableBody() {
    return (
      this.props.tableData.map((tr, index) => {
        return (<tr key={index}>
          {this.props.tableConfig.map((td, index1) => {
            return (<td key={index1}>{this.parseTableData(tr, td)}</td>);
          })}
        </tr>);
      })
    );
  }

  parseTableData(tr, td) {
    if (!tr.hasOwnProperty(td.key))
      return ' - ';
    switch ((td.type || 'string').toLowerCase()) {
      case 'date':
        if (!tr[td.key])
          return ' - ';
        let date = Carbon.parse(tr[td.key]);
        return date.format('YYYY-MM-DD');
      case 'action':
        if (td.hasOwnProperty('action'))
          if (typeof this.props[td.action] === 'function') {
            if (tr.hasOwnProperty(td.key))
              return <button className='btn btn-secondary btn-sm'
                             onClick={(e) => this.props[td.action](e, tr[td.key])}>{td.name}</button>;
            else
              return <button className='btn btn-secondary btn-sm'
                             onClick={(e) => this.props[td.action](e)}>{td.name}</button>;
          }
        return <button className='btn btn-secondary btn-sm'>{td.name}</button>;
      default:
        return tr[td.key];
    }
  }

  render() {
    return (
      <table className='table'>
        <thead>
        {this.getTableHead()}
        {this.getTableBody()}
        </thead>
      </table>
    );
  }
}

export default Table;