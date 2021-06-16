const baseUrl = `https://mysterious-reef-29460.herokuapp.com/api/v1/`;

export const validateUrl = `${baseUrl}validate`;

export const getUserDataUrl = (user_id) => `${baseUrl}user-info/${user_id}`;

export const newsUrl = () => `${baseUrl}news`;
