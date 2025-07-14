import './LoadingItem.css';

function LoadingItem() {
  return (
    <li className={`loading-item`}>
      <div className="buttons"></div>
      <div className="text"> </div>
      <div className="buttons"> </div>
    </li>
  );
}

export { LoadingItem };
