import React from "react";
// import PropTypes from "prop-types";

export default function Alert(props) {
  const caps = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{caps(props.alert.type)}</strong>: {props.alert.message}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}
