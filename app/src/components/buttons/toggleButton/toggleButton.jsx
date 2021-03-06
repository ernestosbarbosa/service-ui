/*
 * Copyright 2017 EPAM Systems
 *
 *
 * This file is part of EPAM Report Portal.
 * https://github.com/reportportal/service-ui
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './toggleButton.scss';

const cx = classNames.bind(styles);

export const ToggleButton = ({ items, value, onChange, mobileDisabled, disabled }) => (
  <div className={cx('toggle-button')}>
    {items.map((item) => (
      <div
        key={item.value}
        className={cx({
          'button-item': true,
          active: item.value === value,
          'mobile-disabled': mobileDisabled,
          disabled,
        })}
        style={{ width: `${100 / items.length}%` }}
        onClick={!disabled ? () => onChange(item.value) : null}
      >
        <span>{item.label}</span>
      </div>
    ))}
  </div>
);
ToggleButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  disabled: PropTypes.bool,
  mobileDisabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
ToggleButton.defaultProps = {
  items: [],
  value: '',
  disabled: false,
  onChange: () => {},
  mobileDisabled: false,
};
