import PropTypes from 'prop-types';
import style from '../FeedbackOptions/FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
        {options.map(name => {
            return (
                <button
                className={style.btn}
                type="button"
                name={name}
                onClick={() => onLeaveFeedback(name)}
                >
                {name}
                </button>
            );
        })}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};
