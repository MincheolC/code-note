import React, {useState} from 'react';

interface LinkProps {
  page: string
}

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link: React.FC<LinkProps> = ({page, children}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;