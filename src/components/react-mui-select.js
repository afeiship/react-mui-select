import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import { Select, MenuItem } from '@material-ui/core';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    native: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    native: true,
    placeholder: '请选择'
  };
  /*===properties end===*/

  render() {
    const { className, native, items, template, ...props } = this.props;
    const Component = native ? 'option' : MenuItem;

    return (
      <Select native={native} className={classNames('react-mui-select', className)} {...props}>
        {
          (items.length > 0) && items.map((item, index) => {
            return template ? template(item, index) : (
              <Component key={item.value} value={item.value}>{item.label}</Component>
            );
          })
        }
      </Select>
    )
  }
}
