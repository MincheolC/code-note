import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info,
    });
    this.setState({
      error: true,
    });

    // 프로덕션 환경에서는 Didcatch로 잡으면 센트리로 보내지 않음.
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}
