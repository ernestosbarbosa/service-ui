import PropTypes from 'prop-types';

export const breadcrumbDescriptorShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.object,
  error: PropTypes.bool,
  listView: PropTypes.bool,
  active: PropTypes.bool,
});
