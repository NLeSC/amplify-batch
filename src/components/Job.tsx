import React from 'react';

export interface IJob {
    name: string
}

interface IProps {
    job: IJob
}

export const Job = ({job}: IProps) => (
    <div>
        <span>{job.name}</span>
    </div>
)