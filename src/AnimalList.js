import './AnimalList.css';

export default function AnimalList({ says, type, name, top, left }) {
  return (
    <div className='animal-item' style={{ position: 'fixed', top: top, left: left }}>
      <p className='name'> {name}</p>
      <p className='says'> {says}</p>
      <img src={`animals/${type}.svg`}/>

    </div>
  );

}