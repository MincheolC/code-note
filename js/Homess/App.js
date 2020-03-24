import App from './src';

// const STORYBOOK_START = true;
const STORYBOOK_START = false;

export default (STORYBOOK_START ? require('./.storybook').default : App);
