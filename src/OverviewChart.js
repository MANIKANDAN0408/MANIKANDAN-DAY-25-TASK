import { Card } from '@mui/material';

import { EarningsOverview } from './earningOverview';


export function OverviewChart() {

    return (

        <div className='overview-chart'>

            <div className='overview-head'>
            <h4>Earnings Overview</h4>

            </div>

            <div style={{ height: '345px', padding: '0px 15px' }}>
                  <EarningsOverview />
        </div>

        </div>
    );
}