// import { useFiltersStore } from '@/stores/filtersStore';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { serviceFiltersSchema, ServicesFiltersType } from '@/schemas/servicesSchema';
// import { Input } from '../ui/input';
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
// import { Button } from '../ui/button';

// const initialFormValues: ServicesFiltersType = {
// 	search: '',
// };

// const ServicesFilters = () => {
// 	const { filters, setFilter, setFilters, clearFilters } = useFiltersStore();

// 	const form = useForm<ServicesFiltersType>({
// 		resolver: zodResolver(serviceFiltersSchema),
// 		defaultValues: initialFormValues,
// 		mode: 'onTouched',
// 	});

// 	function onSubmit(data: ServicesFiltersType) {
// 		console.log(data);
// 		form.reset(initialFormValues);
// 	}

// 	return (
// 		<Form {...form}>
// 			<form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
// 				<FormField
// 					control={form.control}
// 					name='search'
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormControl>
// 								<Input placeholder='Buscar...' {...field} />
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<Button type='submit'>Submit</Button>
// 			</form>
// 		</Form>
// 	);
// };

// export default ServicesFilters;
