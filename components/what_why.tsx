import What from './what'
import Why from './why'

function What_Why() {
  return (
    <div>
      <img src={'/blob-1.jpg'} className='absolute w-full block'></img>
      <What/>
      <div className='relative w-3/4 mx-auto border-t border-white/25 my-3'></div>
      <Why/>
    </div>
  )
}

export default What_Why