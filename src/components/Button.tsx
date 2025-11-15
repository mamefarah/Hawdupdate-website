const Button = ({ variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-primary hover:bg-primary-light text-white",
    secondary: "bg-secondary hover:bg-gray-100 text-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      className={`px-4 py-2 rounded-md transition-colors ${variants[variant]}`}
      {...props}
    />
  );
};