import * as React from 'react';
import './PropertiesTable.scss';

export interface IProperty {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

export interface IPropertiesTableProps {
  properties: IProperty[];
}

export default class PropertiesTable extends React.Component<IPropertiesTableProps, any> {

  public render() {
    let { properties } = this.props;

    return (
      <div className='PropertiesTable'>
        <h2 className='ms-font-xl'>Properties</h2>
        <table className='ms-Table'>
          <tr className='ms-Table-row'>
            <td className='ms-Table-cell'>Name</td>
            <td className='ms-Table-cell'>Type</td>
            <td className='ms-Table-cell'>Default</td>
            <td className='ms-Table-cell'>Description</td>
          </tr>
          { properties.map(property => (
          <tr className='ms-Table-row'>
            <td className='ms-Table-cell'>{ property.name }</td>
            <td className='ms-Table-cell'>{ property.type }</td>
            <td className='ms-Table-cell'>{ property.defaultValue }</td>
            <td className='ms-Table-cell'>{ property.description }</td>
          </tr>
            )) }
        </table>
      </div>
    );
  }

}