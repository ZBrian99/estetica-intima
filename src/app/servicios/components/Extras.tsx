export const FallBackLoader = () => {
	console.log('---Cargando desde Suspense---');
	return (
		<div className='fixed bottom-0 left-0 right-0 min-h-80 flex justify-center items-center bg-green-600/50 flex-col'>
			---Cargando desde Suspense---
			<p>Suspense</p>
		</div>
	);
};

export const IsLoaderComponent = () => {
	console.log('¡¡¡Cargando desde isLoading!!!');
	return (
		<div className='fixed top-16 left-0 right-0 min-h-80 flex justify-center items-center bg-red-600/30 flex-col'>
			¡¡¡Cargando desde isLoading!!!
			<p>useQuery</p>
		</div>
	);
};
export const IsFetchingComponent = () => {
	console.log('¡¡¡Cargando desde isFetching!!!');
	return (
		<div className='fixed w-[66vw] h-[66vh] top-0 left-0 translate-1/4 flex justify-center items-center bg-pink-600/40 flex-col'>
			¡¡¡Cargando desde isFetching!!!
			<p>useQuery</p>
		</div>
	);
};
