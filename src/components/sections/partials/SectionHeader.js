import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
  id:PropTypes.string
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  id,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          id={id}
          className={classes}
        >
          <div className="container-xs">
            {children}
            {data.title &&
              <Component className={
                classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}>{data.title}</Component>
            }
            {data.paragraph &&
              <p className="m-0">{data.paragraph}</p>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;