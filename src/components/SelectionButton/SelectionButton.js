import './SelectionButton.css';

export const SelectionButton = (props) => {
  return <button type="button" className="selection-button">{props.menuOption}</button>;
}
