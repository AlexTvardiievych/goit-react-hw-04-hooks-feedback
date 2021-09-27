import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    data-action={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;