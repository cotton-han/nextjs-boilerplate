const COLOR = {
  DEFAULT: '#377be0',
  ERROR: '#cd4e44',
};

const getStyle = (color: string) => `background: #444; color: ${color}; padding: 2px; border-radius:2px`;

export const defaultLog = (title: string, data: unknown) => console.log(`%c${title}: `, getStyle(COLOR.DEFAULT), data);

export const errorLog = (title: string, data: unknown) => console.log(`%c${title}: `, getStyle(COLOR.ERROR), data);
