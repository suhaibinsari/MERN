import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = ({
  width = 'auto',
  height = 'auto',
  backgroundColor = 'gray',
  onClick,
  text,
  children,
  img,
  link
}) => {
  const buttonContent = (
    <div className='flex items-center justify-center gap-2'>
      {img && <img src={img} alt="no-img" width={24} height={24} className='filter brightness-0 invert' />}
      {text}
      {children}
    </div>
  );

  return (
    <NavLink to={link || '/'} target='_blank'>
      <button
        className="text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2"
        style={{ width, height, backgroundColor }}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  img: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
