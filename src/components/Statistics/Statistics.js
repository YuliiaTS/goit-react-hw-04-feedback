import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <p className={style.text}>
                Good:<span> {good}</span>
            </p>
            <p className={style.text}>
                Neutral:<span> {neutral}</span>
            </p>
            <p className={style.text}>
                Bad:<span> {bad}</span>
            </p>
            <p className={style.text}>
                Total:<span> {total}</span>
            </p>
            <p className={style.text}>
                Positive feedback:<span> {positivePercentage}%</span>
            </p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
