import React from 'react';

const ContactItem = ({ icon: Icon, title, children }) => {
  return (
    <div>
      <div className="flex items-start gap-3">
        <Icon className="mt-1 h-4 w-4 text-accent-secondary" />
        <div>
          <p className="text-sm font-medium text-slate-100">{title} </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
