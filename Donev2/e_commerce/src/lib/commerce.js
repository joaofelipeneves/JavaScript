import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

//create a new file to save all my API's