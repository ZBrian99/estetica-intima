export default function Loading() {
	console.log('***Cargando desde Inicio***');
	return (
		<div className='fixed inset-0 bg-white/30 z-50 flex justify-center items-center flex-col'>
			***Cargando desde Inicio***
			<p>Loading</p>
		</div>
		// <div className="flex items-center justify-center min-h-screen">
		//   <div className="flex flex-col items-center gap-4">
		//     <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
		//     <p className="text-gray-600 text-lg font-medium">Cargando...</p>
		//   </div>
		// </div>
	);
}
