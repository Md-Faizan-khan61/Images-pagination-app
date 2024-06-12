import './App.css'
import Paginated from './paginated';

function App() {
  const images = []
  for (let i = 0; i <= 35; i++) {
    images.push(new Image());
  }
  //page - 1
  images[0].src = 'https://images.pexels.com/photos/15334954/pexels-photo-15334954/free-photo-of-moon-behind-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[1].src = 'https://images.pexels.com/photos/1717214/pexels-photo-1717214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[2].src = 'https://images.pexels.com/photos/7002422/pexels-photo-7002422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[3].src = 'https://images.pexels.com/photos/9912481/pexels-photo-9912481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[4].src = 'https://images.pexels.com/photos/18082488/pexels-photo-18082488/free-photo-of-moon-on-night-sky-behind-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[5].src = 'https://images.pexels.com/photos/13520087/pexels-photo-13520087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[6].src = 'https://images.pexels.com/photos/10947141/pexels-photo-10947141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[7].src = 'https://images.pexels.com/photos/16682766/pexels-photo-16682766/free-photo-of-moon-glowing-through-tree-branches-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[8].src = 'https://images.pexels.com/photos/16110121/pexels-photo-16110121/free-photo-of-blossoms-against-morning-sky-with-moon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[9].src = 'https://images.pexels.com/photos/15211164/pexels-photo-15211164/free-photo-of-the-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[10].src = 'https://images.pexels.com/photos/7337522/pexels-photo-7337522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[11].src = 'https://images.pexels.com/photos/7487421/pexels-photo-7487421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  // page - 2
  images[12].src = 'https://images.pexels.com/photos/10727658/pexels-photo-10727658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[13].src = 'https://images.pexels.com/photos/3654869/pexels-photo-3654869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[14].src = 'https://images.pexels.com/photos/15584423/pexels-photo-15584423/free-photo-of-moon-in-sky-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[15].src = 'https://images.pexels.com/photos/6785277/pexels-photo-6785277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[16].src = 'https://images.pexels.com/photos/6589641/pexels-photo-6589641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[17].src = 'https://images.pexels.com/photos/16959339/pexels-photo-16959339/free-photo-of-moon-on-clear-sky-over-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2l'
  images[18].src = 'https://images.pexels.com/photos/17214032/pexels-photo-17214032/free-photo-of-moon-seen-in-daylight-photographed-between-conifer-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[19].src = 'https://images.pexels.com/photos/19673469/pexels-photo-19673469/free-photo-of-moon-above-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[20].src = 'https://images.pexels.com/photos/18499641/pexels-photo-18499641/free-photo-of-tree-branches-and-the-moon-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[21].src = 'https://images.pexels.com/photos/16237674/pexels-photo-16237674/free-photo-of-moon-in-a-bright-sky.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[22].src = 'https://images.pexels.com/photos/15834631/pexels-photo-15834631/free-photo-of-crescent-moon-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[23].src = 'https://images.pexels.com/photos/18499648/pexels-photo-18499648/free-photo-of-tree-branches-and-the-moon-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  // page - 3
  images[24].src = 'https://images.pexels.com/photos/9912481/pexels-photo-9912481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[25].src = 'https://images.pexels.com/photos/17785545/pexels-photo-17785545/free-photo-of-tree-and-a-moon-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[26].src = 'https://images.pexels.com/photos/10379720/pexels-photo-10379720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[27].src = 'https://images.pexels.com/photos/19746454/pexels-photo-19746454/free-photo-of-little-moon-in-night-sky-behind-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[28].src = 'https://images.pexels.com/photos/11916532/pexels-photo-11916532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[29].src = 'https://images.pexels.com/photos/10531158/pexels-photo-10531158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[30].src = 'https://images.pexels.com/photos/15668982/pexels-photo-15668982/free-photo-of-moon-on-sky-over-city-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[31].src = 'https://images.pexels.com/photos/18112256/pexels-photo-18112256/free-photo-of-moon-seen-between-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[32].src = 'https://images.pexels.com/photos/7705475/pexels-photo-7705475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[33].src = 'https://images.pexels.com/photos/16974516/pexels-photo-16974516/free-photo-of-the-moon-seen-in-daylight-between-blurry-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[34].src = 'https://images.pexels.com/photos/16786000/pexels-photo-16786000/free-photo-of-moon-seen-during-the-day-between-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  images[35].src = 'https://images.pexels.com/photos/2560249/pexels-photo-2560249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  return (
    <>
      <div className='moon'>
        <h3 style={{fontFamily:'cursive',fontSize:'25px',color:'thistle'}}>Moon behind branches</h3>
        
          <Paginated images={images} imagePerPage={12}/>
        
      </div>
      <footer>
        <div className='footer'>
          <h3>&copy; My Website. All right reserved-2024</h3>
        </div>
      </footer>
    </>
  )
}

export default App
