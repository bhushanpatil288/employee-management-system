function Footer() {
	return (
		<div className="bg-gray-800 text-gray-400 py-6">
			<div className="container mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3">
				<p className="text-sm">
					© 2026 <span className="text-white font-medium">EMS</span> — Employee Management System
				</p>
				<p className="text-xs">
					Built with React + Vite + Tailwind CSS
				</p>
			</div>
		</div>
	)
}

export default Footer
