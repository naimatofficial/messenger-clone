import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
	return (
		<div
			className="
			flex 
			min-h-full 
			flex-col 
			justify-center 
			items-center
			py-12 
			sm:px-6
			lg:px-6
		   bg-gray-100
		"
		>
			<div className="sm-xs-auto sm:w-full sm:max-w-md">
				<Image
					src={"/images/logo.png"}
					alt="logo"
					height={48}
					width={48}
					className="mx-auto w-auto"
				/>
				<h2
					className="
					mt-6
					text-center
					text-3xl
					font-bold
					tracking-tight
					text-gray-900
					"
				>
					Sign in your account
				</h2>
			</div>
			<AuthForm />
		</div>
	);
}
