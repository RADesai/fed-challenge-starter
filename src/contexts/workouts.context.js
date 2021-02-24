import React from 'react';

const getInitialWorkouts = () => [
    {
        name: 'Lake Inniscarra, Ireland—Pyramid',
        label: 'lake-inniscarra',
        workouts: 0,
        length: '30:53',
        distance: '6,248 M',
    },
    {
        name: 'Performance Series',
        label: 'performance-series',
        workouts: 9,
        length: '',
        distance: '',
    },
    {
        name: 'Slow Pulls and Fast Intervals',
        label: 'slow-pulls',
        workouts: 0,
        length: '44:13',
        distance: '9,948 M',
    },
    {
        name: '20 Minutes to Toned',
        label: '20-minutes-to-toned',
        workouts: 12,
        length: '',
        distance: '',
    },
    {
        name: 'Carles Race, Boston, Massachusetts',
        label: 'charles-race',
        workouts: 0,
        length: '36:22',
        distance: '8,648 M',
    },
    {
        name: 'Full Body HIIT Series',
        label: 'full-body-hiit',
        workouts: 12,
        length: '',
        distance: '',
    },
    {
        name: 'Kafue River, Zambia—Power Stroke Pyramid',
        label: 'kafue-river',
        workouts: 0,
        length: '22:22',
        distance: '4,660 M',
    },
    {
        name: 'Shred and Burn Series',
        label: 'shred-and-burn',
        workouts: 16,
        length: '',
        distance: '',
    },
];

export const WorkoutsContext = React.createContext({
    data: getInitialWorkouts()
});
