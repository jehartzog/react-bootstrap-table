/* eslint max-len: 0 */
import React from 'react';
import AnimationTable from './animation-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Animation Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/manipulation/animation-table.js</h5>
              <AnimationTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
