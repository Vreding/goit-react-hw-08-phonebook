import PropTypes from "prop-types";
import { LoaderContainer, Spinner } from "./Loader.styled";

const Loader = ({ text }) => <LoaderContainer>{text}&nbsp;<Spinner /></LoaderContainer>;

Loader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loader;