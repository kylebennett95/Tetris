import React from 'react'

// Represents grid square with a color

export default function GridSquare({ color }) {
    const classes = `grid-square color-${color}`
    return <div className={ classes } />
}