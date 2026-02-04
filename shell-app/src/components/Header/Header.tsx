import { useState } from "react";
import Dropdown from "antd/es/dropdown/dropdown";
import type { DropdownProps, MenuProps } from "antd";
import Logo from "../../icons/Logo";
import ProfileIcon from "../../icons/ProfileIcon";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = () => {
    setOpen(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and App Name */}
          <div className="flex items-center gap-3">
            <Logo className="w-9 h-9" />
            <span className="text-2xl font-bold text-blue-600 tracking-tight select-none">
              ShopNest
            </span>
          </div>
          {/* Right: Profile Icon */}
          <div className="flex items-center gap-4">
            <Dropdown
              menu={{
                items: [
                  {
                    key: "logout",
                    label: "Logout",
                  },
                ],
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Profile"
              >
                <ProfileIcon className="w-8 h-8 text-blue-600" />
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
