const Filters = () => {
	return (
		<div>
			<input type='text' placeholder='Buscar...' />
			<div>
				<label htmlFor='category'>Categoría</label>
				<select id='category'>
					<option value='all'>Todas</option>
					<option value='depilacion-femenina'>Depilación Femenina</option>
					<option value='depilacion-masculina'>Depilación Masculina</option>
					<option value='tratamientos-corporales'>Tratamientos Corporales</option>
					<option value='masajes'>Masajes</option>
					<option value='tratamientos-faciales'>Tratamientos Faciales</option>
				</select>
			</div>
			<div>
				<label htmlFor='priceRangeMin'>Rango de Precio</label>
				<input type='text' id='priceRangeMin' />
				<input type='text' id='priceRangeMax' />
			</div>
			<div>
				<label htmlFor='serviceType'>Tipo de Servicio</label>
				<select id='serviceType'>
					<option value='all'>Todos</option>
					<option value='individual'>Individual</option>
					<option value='combo'>Combo</option>
					<option value='pack'>Pack</option>
				</select>
			</div>
			<div>
				<label htmlFor='order'>Ordenar por</label>
				<select id='order'>
					<option value='createOldest'>Mas antiguo</option>
					<option value='createNewest'>Mas reciente</option>
					<option value='priceHighest'>Precio mas alto</option>
					<option value='priceLowest'>Precio mas bajo</option>
					<option value='nameAtoZ'>A-Z</option>
					<option value='nameZtoA'>Z-A</option>
					<option value='durationLongest'>Duracion mas alta</option>
					<option value='durationShortest'>Duracion mas baja</option>
				</select>
			</div>
		</div>
	);
};
export default Filters;
