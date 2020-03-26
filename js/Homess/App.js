import App from './src';

const STORYBOOK_START = true;

export default (STORYBOOK_START ? require('./.storybook').default : App);
