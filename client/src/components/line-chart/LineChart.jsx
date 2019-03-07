import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import moment from 'moment';

import '../../css/line-chart.css';
import FullScreen from './FullScreen';
import CustomHeight from './CustomHeight';

class LineChart extends React.Component {
  state = {
    isFullScreen: false,
    data: [],
    parseDate: d3.timeParse('%m/%d/%Y %H:%M')
  };

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data: data.map(this.type) });
  }

  type = d => {
    const { parseDate } = this.state;
    return {
      date: parseDate(moment(d.date).format('M/D/YYYY HH:mm')),
      value: +d.value
    };
  };

  fullScreen = isFullScreen => {
    this.setState({ isFullScreen });
  };

  render() {
    const { isFullScreen, data } = this.state;
    const { isFullScreenView, id, title, svgHeight } = this.props;

    return isFullScreen ? (
      <FullScreen
        fullScreen={this.fullScreen}
        data={data}
        id={id}
        title={title}
      />
    ) : (
      <CustomHeight
        isFullScreenView={isFullScreenView}
        fullScreen={this.fullScreen}
        svgHeight={svgHeight}
        data={data}
        id={id}
        title={title}
      />
    );
  }
}

LineChart.defaultProps = {
  title: '',
  svgHeight: 500,
  isFullScreenView: false
};

LineChart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  svgHeight: PropTypes.number,
  data: PropTypes.instanceOf(Array).isRequired,
  isFullScreenView: PropTypes.bool
};

export default LineChart;
