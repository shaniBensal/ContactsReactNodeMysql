import React from 'react';

const Contacts = () => (
    <div>Contacts Module</div>
);

export default {
    routeProps: {
        path: '/contacts',
        component: Contacts,
    },
    name: 'Contacts'
};