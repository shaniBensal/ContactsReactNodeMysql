import React from 'react';

const Notes = () => (
    <div>Notes Module</div>
);

export default {
    routeProps: {
        path: '/notes',
        component: Notes
    },
    name: 'Notes'
};