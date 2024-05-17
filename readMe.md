# My Top Emojis

practicing react, and components

This React project displays a list of my top emojis, their names, and meanings. It uses components to render each emoji entry and maps over an array of emoji objects to create the list.

## Project Structure

The project consists of three main parts:

1. **App Component**: The main component that renders the title and the list of emojis.
2. **Entry Component**: A component that renders individual emoji entries.
3. **Emojipedia**: An array of emoji objects with their details.

## Components

### `App.js`

The `App` component is the main component that renders the title and a list of emoji entries using the `Entry` component.

### `Entry.js`

The `Entry` component is a functional component that renders an emoji entry with its name and meaning.

## Props

- emoji: The emoji character to display.
- name: The name of the emoji.
- meaning: The meaning or description of the emoji.