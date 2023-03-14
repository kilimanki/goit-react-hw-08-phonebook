import PropTypes from 'prop-types';
const Textfield = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
      <label></label>
    </div>
  );
};
export default Textfield;
Textfield.propType = {
  props: PropTypes.object.isRequired,
};
