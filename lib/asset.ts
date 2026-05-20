const base = process.env.NODE_ENV === 'production' ? '/wd-new-webiste' : '';
export const asset = (path: string) => `${base}${path}`;
