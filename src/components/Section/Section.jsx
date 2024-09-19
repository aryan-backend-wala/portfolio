import './Section.css'

export default function Section(){
  return (
    <div className="container">
      <div className='headline'>
        <div className='heading-1 text'>
          <p>Hello, I’m </p>
          <p>Mehmet Akif.</p>
        </div>
        <div className='heading-2 text-sub'>
          <p>A senior-year design student who trying to</p>
          <p>specialize in 3D modeling & texturing</p>
        </div>
      </div>
      <div className='text-footer'>
        <img 
          src='/icons/down_arrow.svg'
          className='down-arrow'
        />
      </div>
    </div>
  );
}