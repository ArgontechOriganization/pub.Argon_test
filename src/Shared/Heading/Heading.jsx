import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./style.module.scss";

export default function Subheading(props) {
  const { className, children, mainHeading, pageHeading, subHeadingSize,mainHeadingOne,mainHeadingTwo } = props;
  const styleClass = classNames(className, {
    [styles.pageHeading]: pageHeading,
    [styles.subHeadingSize]: subHeadingSize,
    [styles.mainHeading]: mainHeading,
    [styles.mainHeadingOne]: mainHeadingOne,
    [styles.mainHeadingTwo]: mainHeadingTwo,

  });
  return (
    <h2 className={styleClass}>
      <span>{children}</span>
    </h2>
  );
};

Subheading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  mainHeading: PropTypes.bool,
  mainHeadingOne:PropTypes.bool,
  mainHeadingTwo:PropTypes.bool,
  pageHeading: PropTypes.bool,
  subHeadingSize: PropTypes.bool,
};
Subheading.defaultProps = {
  className: "",
  mainHeading: false,
  pageHeading: false,
  subHeadingSize: false,
};
