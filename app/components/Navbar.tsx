function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-45 space-x-3 bg-column p-5 gap-5">
      <div className="flex flex-row gap-5">
        <div>Logo</div>
        <div>Search Bar</div>
      </div>
      <div>NavLinks</div>
      <div className="flex flex-row gap-5">
        <div>Night Mode & Spoilers</div>
        <div>Profile</div>
        <div>Inbox</div>
        <div>Dropdown</div>
      </div>
    </div>
  );
}

export default Navbar;
