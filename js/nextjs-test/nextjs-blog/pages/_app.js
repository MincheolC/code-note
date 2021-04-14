import '../styles/global.css'

App.getInitialProps = async () => {
  return { customData: 'custome' };
};

export default function App({ Component, pageProps, customData }) {
  console.log(pageProps, customData);
  return <Component {...pageProps} />;
}