
import NewsList from '../../components/news/newslist'
import Grid from '../../components/news/home/grid'
import Footer from '../../components/news/footer'
import Recent from '../../components/news/recent-section';
import './livenews.css';

function LiveNews() {
  return (
   <>
      <div className="newsPage">
        <NewsList/>
      {/* <Recent/> */}
      <Grid/>
      <Footer/>
      </div>
      
      </>
  );
}


export default LiveNews;
