import './Body.css'

export default function Body(){
  return (
    <div className='box-container'>
      <div className='left'>
        <div className='content'>
          <p className='body pb-25'>01 / PROJECT NAME</p>
          <div className='body pb-50'>
            <p>Goblin concept digital sculpture with</p>
            <p>human-like skin. Learned a lot of quick tips</p>
            <p>and look development</p>
          </div>
          <div className='sub-text pb-100 '>
            <p>Sculpted in ZBrush, Retopologized and UVs done</p>
            <p>in Maya, Textured in Mari, Rendered using Arnold.</p>
          </div>
          <div className='body'>
            <p>More shots from this project ↗</p>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='black-box'></div>
      </div>
    </div>
  );
}

function Separator(){
  
}