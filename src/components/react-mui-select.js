import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import { Select, MenuItem } from '@material-ui/core';

const NATIVE_OPTION = 'option';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    onChange({
      target: {
        value
      }
    })
  };

  render() {
    const { className, native, items, onChange, ...props } = this.props;
    const Component = native ? NATIVE_OPTION : MenuItem;

    return (
      <Select
        onChange={this._onChange}
        className={classNames('react-mui-select', className)}
        {...props}
      >
        {
          items.length > 0 && items.map((item, index) => {
            const { value, label, ...itemProps } = item;
            return (
              <Component key={value} value={value} {...itemProps}>{label}</Component>
            );
          })
        }
      </Select>
    )
  }
}
