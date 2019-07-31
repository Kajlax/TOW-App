import React from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("UA-125131425-1");

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (process.env.NODE_ENV === "production") {
      GoogleAnalytics.set({
        page,
        ...options
      });
      GoogleAnalytics.pageview(page);
    }
  };

  const HOC = class extends React.Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
