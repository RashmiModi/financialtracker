import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? 'text' : type;

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="relative mt-1">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full bg-slate-100 rounded px-4 py-3 pr-10 text-sm text-black outline-none border border-slate-200"
          value={value}
          onChange={onChange}
        />
        {isPasswordType && (
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <FaRegEye size={20} className="text-primary" />
            ) : (
              <FaRegEyeSlash size={20} className="text-slate-400" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
