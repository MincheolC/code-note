import React, {useState} from 'react';

export interface LinkProps {
  href?: string
  ref?: React.ForwardedRef<HTMLAnchorElement>
}

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link: React.FC<LinkProps> = ({ref, href, children}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      ref={ref}
      className={status}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;