export const makeApiUrl = (path: string): string => `${process.env.API_URL !== undefined ? process.env.API_URL : 'http://localhost:5000/v1/'}${path}`
