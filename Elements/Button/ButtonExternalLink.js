import React from 'react';

export default function ButtonExternalLink({ label, icon, iconRight, loading, className, externalLink, children }) {
  return (
    <a href={externalLink} className={className} target="_blank" rel="noopener noreferrer">
      {icon && <i className={`icon-${icon}`} />}
      <span>{loading ? 'Carregando000' : label}</span>
      {iconRight && <i className={`icon-${iconRight}`} />}
      {children && children}
    </a>
  );
}
