import PropTypes from 'prop-types';

export default function Notification({message}) {
    return (
        <p style={{ color: 'rosybrown', fontWeight: '700' }}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}