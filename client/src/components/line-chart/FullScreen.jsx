import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import * as d3 from 'd3';

const styles = {
  dialog: {
    maxWidth: 'none',
    width: '100%',
    margin: '5px',
    height: '100%',
    top: '24px',
    padding: '5px'
  },
  lineChart: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    textAlign: 'right',
    cursor: 'pointer'
  },
  line: {
    fill: 'none',
    stroke: 'steelblue',
    strokeWidth: '1.5px',
    width: '100%'
  },
  zoom: {
    cursor: 'move',
    fill: 'none',
    pointerEvents: 'all'
  }
};

class FullScreen extends React.Component {
  state = {
    svgWidth: 0,
    svgHeight: 0,
    margin: { top: 20, right: 20, bottom: 110, left: 40 },
    margin2: { top: 430, right: 20, bottom: 30, left: 40 },
    svg: null,
    width: 0,
    x: null,
    x2: null,
    xAxis: null,
    brush: null,
    zoom: null,
    line: null,
    lineChart: null,
    focus: null,
    context: null
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    setTimeout(() => {
      this.resize();
    }, 200);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { id } = this.props;
    const { offsetWidth, offsetHeight } = document.getElementById(
      `${id}-full-div`
    );
    const svgHeight = offsetHeight - 30;
    const { margin, margin2 } = this.state;
    margin.bottom = svgHeight * 0.22;
    margin2.top = svgHeight * 0.86;
    this.setState({ svgWidth: offsetWidth, svgHeight, margin, margin2 }, () => {
      this.createGraph();
    });
  };

  createGraph = () => {
    const { id, title } = this.props;
    const { svgWidth, svgHeight, margin, margin2 } = this.state;

    const svg = d3.select(`#${id}`);
    svg.selectAll('*').remove();

    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const height2 = svgHeight - margin2.top - margin2.bottom;

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .append('text')
      .attr('x', svgWidth / 2)
      .attr('dy', 12)
      .attr('text-anchor', 'middle')
      .text(title);

    const x = d3.scaleTime().range([0, width]);
    const x2 = d3.scaleTime().range([0, width]);

    const y = d3.scaleLinear().range([height, 0]);
    const y2 = d3.scaleLinear().range([height2, 0]);

    const xAxis = d3.axisBottom(x);
    const xAxis2 = d3.axisBottom(x2);
    const yAxis = d3.axisLeft(y);

    this.setState({ svg, width, x, x2, xAxis }, () => {
      const brush = d3
        .brushX()
        .extent([[0, 0], [width, height2]])
        .on('brush end', this.brushed);

      const zoom = d3
        .zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .on('zoom', this.zoomed);

      const line = d3
        .line()
        .x(d => x(d.date))
        .y(d => y(d.value));

      const line2 = d3
        .line()
        .x(d => x2(d.date))
        .y(d => y2(d.value));

      svg
        .append('defs')
        .append('svg:clipPath')
        .attr('id', 'clip')
        .append('svg:rect')
        .attr('width', width)
        .attr('height', height)
        .attr('x', 0)
        .attr('y', 0);

      const lineChart = svg
        .append('g')
        .attr('class', 'focus')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      // .attr('clip-path', 'url(#clip)');

      const focus = svg
        .append('g')
        .attr('class', 'focus')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const context = svg
        .append('g')
        .attr('class', 'context')
        .attr('transform', `translate(${margin2.left},${margin2.top})`);

      this.setState({ brush, zoom, line, lineChart, focus, context }, () => {
        const { data, classes } = this.props;
        x.domain(d3.extent(data, d => d.date));
        y.domain([0, d3.max(data, d => d.value)]);
        x2.domain(x.domain());
        y2.domain(y.domain());

        focus
          .append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', `translate(0,${height})`)
          .call(xAxis);

        focus
          .append('g')
          .attr('class', 'axis axis--y')
          .call(yAxis);

        lineChart
          .append('path')
          .datum(data)
          .attr('class', classes.line)
          .attr('d', line);

        context
          .append('path')
          .datum(data)
          .attr('class', classes.line)
          .attr('d', line2);

        context
          .append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', `translate(0,${height2})`)
          .call(xAxis2);

        context
          .append('g')
          .attr('class', 'brush')
          .call(brush)
          .call(brush.move, x.range());

        svg
          .append('rect')
          .attr('class', classes.zoom)
          .attr('width', width)
          .attr('height', height)
          .attr('transform', `translate(${margin.left},${margin.top})`)
          .call(zoom)
          .on('mousewheel.zoom', null)
          .on('DOMMouseScroll.zoom', null)
          .on('wheel.zoom', null);
      });
    });
  };

  brushed = () => {
    const { classes } = this.props;
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return;
    const {
      x,
      x2,
      lineChart,
      line,
      xAxis,
      focus,
      svg,
      zoom,
      width
    } = this.state;
    const s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    lineChart.select(`.${classes.line}`).attr('d', line);
    focus.select('.axis--x').call(xAxis);
    svg
      .select(`.${classes.zoom}`)
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  };

  zoomed = () => {
    const { classes } = this.props;
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return; // ignore zoom-by-brush
    const t = d3.event.transform;
    const { x, x2, lineChart, line, focus, xAxis, context, brush } = this.state;
    x.domain(t.rescaleX(x2).domain());
    lineChart.select(`.${classes.line}`).attr('d', line);
    focus.select('.axis--x').call(xAxis);
    context.select('.brush').call(brush.move, x.range().map(t.invertX, t));
  };

  fullScreen = () => {
    const { fullScreen } = this.props;
    fullScreen(false);
  };

  render() {
    const { classes, id } = this.props;
    const { svgHeight } = this.state;
    return (
      <Dialog
        classes={{ paper: classes.dialog }}
        open
        aria-labelledby="simple-dialog-title"
      >
        <div id={`${id}-full-div`} className={classes.lineChart}>
          <div className={classes.closeIcon}>
            <Close onClick={this.fullScreen} />
          </div>
          <svg id={id} width="100%" height={svgHeight} />
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(FullScreen);
