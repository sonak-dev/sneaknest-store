export const Band = ({ className = "", children }) => (
   <div className={className}>
      <div className="max-w-360 mx-auto px-4 md:px-16">{children}</div>
   </div>
);