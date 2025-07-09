'use client'; 

const AdminCommonButton = ({ children, className = '', ...props }) => {
  return (
    <button
      style={{ fontFamily: 'Roboto, sans-serif' }}
      className={`relative font-[600] text-md overflow-hidden text-white min-w-40 h-13.5 rounded-[2rem] group flex justify-center cursor-pointer items-center bg-[#F85C70] z-0 ${className}`}
      {...props}
    >
      {/* Hover animation layer */}
      <div className="absolute inset-0 bg-[#FF3147] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />

      {/* Text + icon layer */}
      <div className="flex items-center justify-center relative z-10">
        <span>{children}</span>
      </div>
    </button>
  );
};

export default AdminCommonButton;
