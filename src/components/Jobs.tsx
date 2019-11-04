import React from 'react';
import { Job, IJob } from './Job';

interface IProps {
    jobs: IJob[]
}

export const Jobs = ({ jobs } : IProps) => (
    <ol>
        {jobs.map(
            (j) => <li key={j.name}><Job job={j}/></li>
        )}
    </ol>
);
