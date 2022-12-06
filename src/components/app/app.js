import './app.css'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import MoviesAddForm from '../movie-add-form/movie-add-form'
import MovieList from '../movie-list/movie-list'


function App() {

	const data = [
		{name: 'marvel halk', viewers: 900, favourite: false},
		{name: 'marvel Toni Stark', viewers: 800, favourite: false},
		{name: 'marvel Qasoskorlar', viewers: 1000, favourite: true}
	]

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	);
}

export default App;