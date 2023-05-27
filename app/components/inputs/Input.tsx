import React from "react";
import clsx from "clsx";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	required?: string;
	register: UseFormRegister<FieldValues>;
	disabled?: boolean;
	errors: FieldErrors;
}
// Define the Input component as a functional component using React.FC type
const Input: React.FC<InputProps> = ({
	label,
	id,
	type,
	placeholder,
	required,
	register,
	disabled,
	errors,
}) => {
	return (
		<div>
			<label
				className="
				block
				text-sm 
				font-medium 
				leading-6
				text-gray-900 
			"
				htmlFor={id}
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					type={type}
					id={id}
					autoComplete={id}
					placeholder={placeholder}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`
					form-input
					block
					w-full
					rounded-md
					border-0
					py-1.5
					text-gray-900
					shadow-md
					ring-1
					ring-inset
					ring-ray-900
					placeholder:text-gray-400
					focus:ring-inset
					focus:ring-sky-600
					sm:text-sm
					sm:leading-6`,
						errors[id] && "focus:ring-rose-500",
						disabled && "opacity-50 cursor-default"
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
