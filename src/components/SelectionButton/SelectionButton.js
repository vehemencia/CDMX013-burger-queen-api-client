import './SelectionButton.css';

export const SelectionButton = (props) => {
  return <button type="button" onClick={props.buttonFunction} className="selection-button">{props.menuOption}</button>;
}
