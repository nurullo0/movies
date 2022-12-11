import './app-info.scss'

function AppInfo({allMoviesCount,onLikeMoviesCount}) {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar soni:{onLikeMoviesCount}</p>
    </div>
  );
}

export default AppInfo;