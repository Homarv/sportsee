/**
 * Sidebar button component displaying an icon and a description.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.imageUrl - The URL of the icon image.
 * @param {string} props.description - The description of the icon.
 * @param {string} props.addClass - Additional class to add to the component (optional).
 * @returns {JSX.Element} JSX element representing the sidebar button.
 */

const SidebarBtn = ({ imageUrl, description, addClass }) => {
  // Adds the additional class (addClass) with the existing classes
  const classNames = `sidebarbtn${addClass ? ` sidebarbtn__${addClass}` : ""}`;

  return (
    <div className={classNames}>
      <img src={imageUrl} alt={description} className="centered-image" />
    </div>
  );
};

export default SidebarBtn;

