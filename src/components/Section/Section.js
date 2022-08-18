import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
        <div>
            <h2 style={{ margin: '20px auto', }}>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
